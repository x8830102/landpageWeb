<template>
<nav class="navbar navbar-expand-lg bg-color">
	<a class="navbar-brand" href="#">首頁</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"><span></span></span>
	</button>

	<div class="collapse navbar-collapse" id="navbarsExampleDefault">
		<ul class="navbar-nav mr-auto">
			<li class="nav-item">
				<a class="nav-link" href="https://docs.google.com/a/panmedia.asia/document/d/1FfQgKx8UGagfZhSGFw4LDK81vlANn-_m53dHry41z0E/edit?usp=sharing" target="_self">關於我們</a>
			</li>
			<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">泛科學院</a>
				<div class="dropdown-menu" aria-labelledby="dropdown01" style="padding: 0px;margin: 0px">
					<a class="dropdown-item" target="_parent" href="https://panacademy.asia/">【線上】影音課程一覽</a>
					<a class="dropdown-item" target="_black" href="https://events.panmedia.asia/hosts/7261611697290253/%E6%B3%9B%E7%A7%91%E5%AD%B8%E9%99%A2/now/page/1?count=10">【線下】實體課程一覽</a>
				</div>
			</li>
			<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">學院空間</a>
				<div class="dropdown-menu" aria-labelledby="dropdown01" style="padding: 0px;margin: 0px 0px 20px 0px">
					<a class="dropdown-item" target="_black" href="https://docs.google.com/forms/d/e/1FAIpQLSd6gbYTvRCmAYdGYf7PVHM5CRtosEBWSnLX6m45b4tBgeX2sQ/viewform">場地租借</a>
					<a class="dropdown-item" target="_self" href="https://docs.google.com/a/panmedia.asia/document/d/1q6ZyNtuhOfQQ7XZ2jDGiPQCnT6Mp4yN1U9Dyva6226c/edit?usp=sharing">交通資訊</a>
				</div>
			</li>
		</ul>
	</div>
</nav>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
@import "./../../assets/sass/variable.sass";
*
	transition: background-color 0.3s
.navbar-toggler-icon
	position: relative
	&:before,&:after
		display: block
		content: ''
	span,&:before,&:after
		width: 100%
		position: absolute
		border-top: 2px solid white
		background-color: white
	span
		top: 50%
		left: 50%
		transform: translate(-50%,-50%)
	&:before
		top: 23%
		left: 50%
		transform: translateX(-50%)
	&:after
		top: 75%
		left: 50%
		transform: translateX(-50%)

		
.navbar-toggler
	transition: border 0.3s
	&:focus
		outline: none
	&:hover
		border: 1px solid rgba(white,0.3)
.navbar-brand
	padding: 18px 9px
	font-size: 16px
	max-width: 60px
	margin: 0
	color: white
	display: inline-block
	&:hover
		background-color: $hover_color
.navbar-toggler-right
	cursor: pointer
.bg-color
	background-color: $second_color
	padding: 0px 18px
.navbar-expand-lg .navbar-nav .nav-link
	color: white
	font-size: 16px
.nav-link
	padding: 18px 9px
	letter-spacing: 2px
	font-weight: 300
	&:hover
		background-color: $hover_color
	&:after
		display: none
.dropdown-menu
	border-radius: 0px
	background-color: $second_color
	border: none
	a
		color: white
		padding: 6px 15px
		&:hover
			background-color: $hover_color
			
@media (max-width: 991px)
	.navbar-expand-md .navbar-nav .dropdown-menu
		border: none
		background-color: $second_color
		padding: 0px
		margin-bottom: 10px
		.dropdown-item
			padding: 6px 27px
			color: white
			&:hover
				color: black
	.dropdown-toggle
		&:hover
			background-color: inherit

</style>
