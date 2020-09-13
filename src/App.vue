<template>
  <open-file />
</template>

<script>

  import { ref } from 'vue'
  import OpenFile from './components/OpenFile.vue'

export default {
  name: 'App',
  components: {
    OpenFile
  },
  setup() {
    let data =  ref('hello')

    return {
      data
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
