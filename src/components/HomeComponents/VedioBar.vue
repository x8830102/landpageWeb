<template>
	<div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style="width: 100%">
		<div class="carousel-inner">
			 <a href="#" class="carousel-item active" target="_blank">
                <video width="100%" autoplay loop>
                    <source src="../../../static/vedio/vedio.mp4" type="video/mp4">
                    Your browser does not support HTML5 video.
                </video>
            </a>
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
export default {
  	data () {
		return {
		}
	},
	mounted(){
		$('.carousel').carousel({
			interval: 2000
		})
	}
}
</script>

