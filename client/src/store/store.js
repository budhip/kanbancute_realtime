import * as firebase from 'firebase'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const config = {
  apiKey: 'AIzaSyBPxwiFOxz-aEeBfiLBDZ0027X17sjJr4Q',
  databaseURL: 'https://kanbancute.firebaseio.com',
  projectId: 'kanbancute'
}
const db = firebase.initializeApp(config).database()
var todosRef = db.ref('todos')

export const store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    getTodos: function (state) {
      todosRef.on('value', snapshot => {
        state.todos = []
        for (var prop in snapshot.val()) {
          state.todos.push(snapshot.val()[prop])
        }
      })
    }
  },
  actions: {
    addTodo (store, context) {
      if (store.state.todos.length > 0) {
        let idx = store.state.todos[store.state.todos.length - 1].id + 1
        db.ref(`todos/${idx}`).set({
          id: idx,
          task: context.task,
          description: context.description,
          assignee: context.assignee,
          point: context.point,
          status: context.status
        })
      } else {
        db.ref(`todos/1`).set({
          id: 1,
          task: context.task,
          description: context.description,
          assignee: context.assignee,
          point: context.point,
          status: context.status
        })
      }
    },
    removeTodo (state, context) {
      db.ref(`todos/${context}`).remove()
    },
    becomeTasktodo (state, context) {
      db.ref(`todos/${context.id}`).set({
        id: context.id,
        task: context.task,
        description: context.description,
        assignee: context.assignee,
        point: context.point,
        status: 'tasktodo'
      })
    },
    becomeWorkinprogress (state, context) {
      db.ref(`todos/${context.id}`).set({
        id: context.id,
        task: context.task,
        description: context.description,
        assignee: context.assignee,
        point: context.point,
        status: 'workinprogress'
      })
    },
    becomeTesting (state, context) {
      db.ref(`todos/${context.id}`).set({
        id: context.id,
        task: context.task,
        description: context.description,
        assignee: context.assignee,
        point: context.point,
        status: 'testing'
      })
    },
    becomeDone (state, context) {
      db.ref(`todos/${context.id}`).set({
        id: context.id,
        task: context.task,
        description: context.description,
        assignee: context.assignee,
        point: context.point,
        status: 'done'
      })
    }
  },
  getters: {
    tasktodo (state) {
      return state.todos.filter(todo => {
        return todo.status === 'tasktodo'
      })
    },
    workinprogress (state) {
      return state.todos.filter(todo => {
        return todo.status === 'workinprogress'
      })
    },
    testing (state) {
      return state.todos.filter(todo => {
        return todo.status === 'testing'
      })
    },
    done (state) {
      return state.todos.filter(todo => {
        return todo.status === 'done'
      })
    }
  }
})
