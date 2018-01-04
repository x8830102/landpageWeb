<template>
    <div class="card big-card" style="width: 100%">
        <img class="card-img-top" :src="data.imgUrl" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title text-left">{{ data.title }}</h5>
            <p class="text-left" style="margin-bottom: auto">{{ data.description }}</p>
            <div class="text-right">
                <a :href="data.link" target="_blank" class="btn btn-outline-secondary">了解詳情</a>
            </div>
        </div>
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
.big-card
    .card-body
        padding: 30px
        min-height: 245px
        display: flex
        flex-direction: column
        p
            font-size: 16px
            letter-spacing: 1px
            color: rgba(black,0.4)
            line-height: 31px
    .title
        border: 1px solid black
    .btn-outline-secondary
        border: 2px solid $major_color
        color: $major_color
        width: 150px
        height: 45px
        &:hover
            background-color: transparent
            border: 2px solid lighten($major_color,50%)
            color: lighten($major_color,50%)
    @media (max-width: 991px)
        .big-card
            .card-body
                padding: 25px
</style>

