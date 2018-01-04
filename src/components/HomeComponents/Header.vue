<template>
  <header id="header" class="myheader">
    <div class="container header">
      <div class="toplogo">
        <img src="./../../../static/images/panacademy_toplogo.png" width="200">
      </div>
    </div>
    <div id="menu" class="mymenu">
      <div class="container">
        <menu-bar></menu-bar>
      </div>
    </div>
  </header>
</template>

<script>
import MenuBar from './MenuBar'
export default {
  components: {
    MenuBar
  },
  data () {
    return {
      msg: 'Header'
    }
  },
  mounted() {
    $(document).scroll(function(){
        var top = $(document).scrollTop();
        var headerHeight = $("#header").height();
        if(top >= headerHeight ){
          $('#menu').addClass('fixed-top')
        }
        else{
          $('#menu').removeClass('fixed-top')
        }
    })
  }
}
</script>

<style lang="sass">
@import "./../../assets/sass/variable.sass";
.myheader
  text-align: left
.toplogo
  margin: 20px 0px
.mymenu
  background-color: $second_color
</style>