<template lang="html">
  <div>
    <Navbar></Navbar>
    <Maincontent></Maincontent>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Maincontent from '@/components/Maincontent'
export default {
  components: {
    Navbar,
    Maincontent
  },
  created () {
    this.$store.commit('getTodos')
  }
}
</script>

<style lang="css">
.cardhead {
  background-color: aquamarine;
  color: black;
  font-size: 24px;
}

.cardcontent {
  color: black;
  font-size: 16px;
}
</style>
