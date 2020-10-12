<template>
  <div id="app">
    <app-machine />
  </div>
</template>

<script>

import appMachine from "@/components/appMachine"

export default {
  name: 'App',
  components: {
    appMachine
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
</style>
