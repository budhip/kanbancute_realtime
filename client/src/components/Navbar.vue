<template lang="html">
  <div class="container">
    <h1>Kanban Cute</h1>
    <div class="">
      <b-btn @click="$root.$emit('show::modal','modal1')">Add a Card</b-btn>
      <!-- Modal Component -->
      <b-modal id="modal1" title="Add Card">
        <form>
          <p>Task: </p>
          <b-form-input type="text" placeholder="--Title task--" v-model="task"></b-form-input><br>
          <p>Description: </p>
          <textarea rows="4" cols="50" v-model="description"></textarea><br>
          <p>Assigned To: </p>
          <b-form-input type="text" placeholder="--Assigned To--" v-model="assignee"></b-form-input><br>
          <p>Point:</p>
          <b-form-input type="text" placeholder="--Point--" v-model="point"></b-form-input><br>
          <b-button size="lg" variant="success" @click="addTask">Submit</b-button>
        </form>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      task: null,
      assignee: null,
      point: null,
      description: null
    }
  },
  methods: {
    addTask (event) {
      event.preventDefault()
      if (this.task && this.assignee && !isNaN(this.point)) {
        let payload = {
          task: this.task,
          description: this.description,
          assignee: this.assignee,
          point: this.point,
          status: 'tasktodo'
        }
        this.task = ''
        this.description = ''
        this.assignee = ''
        this.point = ''
        this.$store.dispatch('addTodo', payload)
        this.$root.$emit('hide::modal', 'modal1')
      }
    }
  }
}
</script>

<style lang="css">
</style>
