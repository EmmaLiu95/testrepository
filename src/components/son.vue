<template>
  <div>
    <ul>
      <li v-for='(item,index) in plist' 
          :key='index'
          @click='cpnClick(item)'>{{item.name}}
          </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: '',
  props: ['plist'],
  methods: {
    cpnClick(item) {
      this.$emit('appClick',item.name)
      console.log(item.id)
    }
  }
}
</script>
<style scoped>
</style>