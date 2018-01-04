<template>
  <div class="footer">
    <p>Copyright © 2018 泛科學院 All rights reserved.</p>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      msg: 'Header'
    }
  }
}
</script>

<style scoped lang="sass">
@import "./../../assets/sass/variable.sass"

.footer
	background-color: $second_color
	color: white
	padding: 20px 0px
p
	margin: 0px
</style>