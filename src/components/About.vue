<template>
  <div id='about'>
    <h2>about</h2>
    {{getuserId}}
    {{$route.params.userId}}
  </div>
</template>
<script>
export default {
  name: 'About',
  data () {
    return {
    }
  },
  computed: {
    getuserId() {
      return this.$route.params.userId
    }
  }
}
</script>
<style scoped>
</style>