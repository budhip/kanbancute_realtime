<template lang="html">
  <b-card id="drag1" header="Work In Progress" class="mb-2 card-info cardhead">
    <b-card v-for="(todo, index) in todos" :header="todo.task" :key="todo.id" class="mb-2 cardcontent">
      <p>({{ todo.point }}) Assigned to: {{ todo.assignee }} </p>
      <b-btn @click="$root.$emit('show::modal',todo.id.toString())"class="btn btn-info btn-sm">Detail</b-btn>
      <b-modal :id="todo.id.toString()" :title="todo.task">
        <form>
          <p align="justify">Detail: {{ todo.description }}</p>
          <p align="justify">Story Point: {{ todo.point }}</p>
          <p align="justify">Assigned to: {{ todo.assignee }}</p>
          <div class="flex-container">
            <b-button size="sm" variant="warning" @click="becomeTasktodo(todo)">Change to Task To-Do</b-button>
            <b-button size="sm" variant="danger" @click="remove(todo)">Delete</b-button>
            <b-button size="sm" variant="primary" @click="becomeTesting(todo)">Changet to Testing</b-button>
          </div>
        </form>
      </b-modal>
    </b-card>
  </b-card>
</template>

<script>
export default {
  computed: {
    todos () {
      return this.$store.getters.workinprogress
    }
  },
  methods: {
    remove (todo) {
      if (window.confirm('Are sure want to delete this task?')) {
        this.$store.dispatch('removeTodo', todo.id)
      }
    },
    becomeTesting (todo) {
      this.$store.dispatch('becomeTesting', todo)
    },
    becomeTasktodo (todo) {
      this.$store.dispatch('becomeTasktodo', todo)
    }
  }
}
</script>

<style lang="css">
</style>
