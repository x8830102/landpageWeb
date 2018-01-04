<template>
    <a :href="link" class="carousel-item" :class="isFirst" target="_blank">
        <img class="d-block w-100" :src="imgUrl" alt="First slide">
    </a>
</template>

<script>

export default {
    props: [
        'link','imgUrl','isfirst'
    ],
    data () {
        return {
            
        }
    },
    computed: {
        isFirst() {
            if(this.isfirst=='0'){
                return 'active'
            }
            return ''
        }
    }
}
</script>

<style lang="sass" scoped>
.carousel-item
    overflow: hidden
    height: 400px
    img
        transition: all .3s
        height: 400px
    &:hover
        img
            transform: scale(1.1)
</style>