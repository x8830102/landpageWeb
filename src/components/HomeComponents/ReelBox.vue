<template>
  <div class="container">
	<div class="carousel">
	  <h4 class="title">課程</h4>
      <div class="reelbox">
		<div class="reel">
			<article-card v-for="(reelData,index) in reelDatas" :data="reelData" :key="index"></article-card>
		</div>
		<div @mouseover="test" @mouseout="test2" class="turnRight" ></div>
		<div @mouseover="test3" @mouseout="test4" class="turnLeft"></div>
      </div>
	</div>
  </div>
</template>
<script>
import {Store} from './../../assets/js/store'
import ArticleCard from './ArticleCard'
export default {
  components: {
    ArticleCard,
  },
  data () {
    return {
		reelDatas: Store.$data.reelDatas,
		num: 0,
		startPosition: 0,
		nowPosition: 0,
		step: 1,
		reelLength: 0,
		timerRight: Object,
		timerLeft: Object,
    }
  },
  computed: {
	  getTotleLength(){
		  var width  = $('article').css('width')
		  width = parseInt( width.substring( 0, width.length - 2 ));
		  var margin  = $('article').css('margin-right')
		  margin = parseInt( margin.substring( 0, margin.length - 2 ));
		  return this.num * ( width + margin)
	  }
  },
  methods: {
	  reelRight(){
		  if(this.nowPosition < 0){
		  	this.nowPosition = this.nowPosition + this.step
			$('.reel').css('transform','translateX('+ this.nowPosition +'px)')
		  }
	  },
	  reelLeft(){
		  var veiwLength = parseInt($('.reel').css('width').substring(0 ,$('.reel').css('width').length - 2))
		   if(this.nowPosition > (0 - this.reelLength + veiwLength)){
			 this.nowPosition = this.nowPosition - this.step 
			 $('.reel').css('transform','translateX('+ this.nowPosition +'px)')
		   }
	  },
	  resetAllData() {
		  	this.num = this.reelDatas.length
		  	this.reelLength = this.getTotleLength
	  },
	  test(){
		  var that = this
		  this.timerRight = setInterval(function(){
			  that.reelRight()
			  if(that.nowPosition >= 0){
				  clearInterval(that.timerRight)
			  }
		  },5)
	  },
	  test2(){
		  clearInterval(this.timerRight);
	  },
	  test3(){
		  var that = this
		  var veiwLength = parseInt($('.reel').css('width').substring(0 ,$('.reel').css('width').length - 2))
		  this.timerLeft = setInterval(function(){
			  that.reelLeft()
			  if(this.nowPosition < (0 - this.reelLength + veiwLength)){
				  clearInterval(that.timerLeft)
			   }
		  },5)
	  },
	  test4(){
		  clearInterval(this.timerLeft);
	  }
  },
  mounted(){
	  this.resetAllData();
  }

}   
</script>
<style lang="sass" scoped>
@import "./../../assets/sass/variable.sass";
.carousel
	padding: 40px 47px
	background-color: #eee
	.title
        text-align: left
        border-left: solid 4px black
        padding-left: 15px
        margin-bottom: 25px
        letter-spacing: 2px
.reelbox
	overflow: hidden
	position: relative
.reel
	display: block
	overflow: visible
	position: relative
	white-space: nowrap
.turnRight,.turnLeft
	width: 80px
	height: 80px
	border-radius: 50%
	background-color: rgba($second_color,0.5)
	position: absolute
	top: 50%
	cursor: pointer
	transition: background-color 0.3s
	&:hover
		background-color: rgba($second_color,0.8)
.turnRight
	left: 100%
	transform: translate(-50%,-50%)
	&:after,&:before
		content: ''
		position: absolute
		border-top: 2px solid white
		width: 10px
		top: 50%
		left: 20px
	&:after
		transform-origin: 100% 50%
		transform: rotate(45deg) 
	&:before
		transform-origin: 100% 50%
		transform: rotate(-45deg)
.turnLeft
	left: 0
	transform: translate(-50%,-50%)
	&:after,&:before
		content: ''
		position: absolute
		border-top: 2px solid white
		width: 10px
		top: 50%
		left: 50px
	&:after
		transform-origin: 0% 50%
		transform: rotate(45deg) 
	&:before
		transform-origin: 0% 50%
		transform: rotate(-45deg)
</style>
