<template>
  <div id="app">
    <router-link to='/me'>我的</router-link>
    <router-link :to="'/about/' + userId" >关于</router-link>
    <router-view></router-view>
    <h1>修改第一次</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      userId: 'lisi'
    }
  },
  methods: {
  }
}
</script>

<style>
  .router-link-active {
    color:red
  }
</style>
