<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-3">
        <Tasktodo></Tasktodo>
      </div>
      <div class="col-xs-12 col-md-3">
        <Workinprogress></Workinprogress>
      </div>
      <div class="col-xs-12 col-md-3">
        <Testing></Testing>
      </div>
      <div class="col-xs-12 col-md-3">
        <Done></Done>
      </div>
    </div>
  </div>
</template>

<script>
import Tasktodo from '@/components/Tasktodo'
import Workinprogress from '@/components/Workinprogress'
import Testing from '@/components/Testing'
import Done from '@/components/Done'
export default {
  components: {
    Tasktodo,
    Workinprogress,
    Testing,
    Done
  }
}
</script>

<style lang="css" scoped>
.container {
  margin-top: 20px;
}
</style>
