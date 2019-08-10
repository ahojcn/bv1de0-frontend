<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      // this.$http.post("apis/csrftoken/").then(res => {
      //   console.log(res)
      // }, err => {
      //   console.log(err)
      // })

      this.axios.post("apis/csrftoken/").then(res => {
        console.log(res)
      }, err => {
        console.log(err)
      })
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>
