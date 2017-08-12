<template lang="html">
  <b-card header="Testing" class="mb-2 card-info cardhead">
    <b-card v-for="(todo, index) in todos" :header="todo.task" :key="todo.id" class="mb-2 cardcontent">
      <p>({{ todo.point }}) Assigned to: {{ todo.assignee }} </p>
      <b-btn @click="$root.$emit('show::modal',todo.id.toString())"class="btn btn-info btn-sm">Detail</b-btn>
      <b-modal :id="todo.id.toString()" :title="todo.task">
        <form>
          <p align="justify">Description: {{ todo.description }}</p>
          <p align="justify">Story Point: {{ todo.point }}</p>
          <p align="justify">Assigned to: {{ todo.assignee }}</p>
          <div class="flex-container">
            <b-button size="sm" variant="warning" @click="becomeWorkinprogress(todo)">Change To Work In Progress</b-button>
            <b-button size="sm" variant="danger" @click="remove(todo)">Delete</b-button>
            <b-button size="sm" variant="success" @click="becomeDone(todo)">Change To Done</b-button>
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
      return this.$store.getters.testing
    }
  },
  methods: {
    remove (todo) {
      if (window.confirm('Are you sure want to delete this task?')) {
        this.$store.dispatch('removeTodo', todo.id)
      }
    },
    becomeWorkinprogress (todo) {
      this.$store.dispatch('becomeWorkinprogress', todo)
    },
    becomeDone (todo) {
      this.$store.dispatch('becomeDone', todo)
    }
  }
}
</script>

<style lang="css">
</style>
