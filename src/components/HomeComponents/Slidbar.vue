<template>
	<div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style="width: 100%">
		<div class="carousel-inner">
			<slide v-for="(item, index) in images" :link="item.link" :imgUrl="item.imgUrl" :isfirst="index" :key="index"></slide>
		</div>
		<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="sr-only">Previous</span>
		</a>
		<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="sr-only">Next</span>
		</a>
	</div>
</template>

<script>
import Slide from './SliderImage'
import {Store} from '../../assets/js/store'
export default {
	components: {
		Slide
	},
  	data () {
		return {
			images: Store.$data.images
		}
	},
	mounted(){
		$('.carousel').carousel({
			interval: 2000
		})
	}
}
</script>

