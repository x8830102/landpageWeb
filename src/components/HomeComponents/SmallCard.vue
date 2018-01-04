<template>
    <div class="card small-card mb-2" style="width: 100%;">
        <a :href="data.link">
            <div class="imgbox">
                <img class="card-img-top" :src="data.imgUrl" alt="Card image cap">
            </div>
            <div class="card-body">
                <div class="title">{{ data.title }}</div>
                <div class="date">{{ data.date }}</div>
                <div class="address">{{ data.address }}</div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        data: Object
    }
}
</script>
<style scoped lang="sass">
@import "./../../assets/sass/variable.sass";
.small-card
    a
        color: black
        text-decoration: none
        width: 100%
        display: block
    background-color: transparent
    border: none
    &:hover
        .card-img-top
            transform: rotate(5deg) scale(1.15)
    .title
        font-weight: 400
        text-align: left
        white-space: nowrap
        text-overflow: ellipsis
        overflow: hidden
    .date,.address
        font-size: 16px
        color: rgba(black,0.4)
        margin: 5px
        text-align: left
        over-flow: hidden
        white-space: nowrap
        text-overflow: ellipsis
        overflow: hidden
    .card-body
        height: 130px
        border-box: box-sizing
        padding: 15px
        height: 130px
        background-color: white
        color: $major_color
    .imgbox
        overflow: hidden
    .card-img-top
        width: 100%
        transition: transform 0.3s

    
</style>

