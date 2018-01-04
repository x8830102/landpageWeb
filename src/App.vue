<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
*
//  border: solid 1px black
  box-sizing: border-box
  font-family: '微軟正黑體'
@import "~bootstrap/scss/bootstrap";
@import "./assets/sass/variable.sass";
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: $major-color
</style>
