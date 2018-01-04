<template>
    <article class="">
        <a :href="data.link"><img :src="data.imgUrl" width="100%" :alt="data.title"></a>
        <div class="desp">
            <header>
                <h3>{{ data.title }}</h3>
            </header>
            <p>{{ data.description.slice(0,20) + "..." }}</p>
        </div>
    </article>
</template>
<script>
export default {
    props: {
        data: Object
    },
    name: "ArticleCard"
}
</script>
<style lang="sass" scoped>
    article
        margin-right: 8px
        border: none
        width: 14em
        padding-bottom: 0.5em
        display: inline-block
        white-space: normal
        text-align: center
        .desp
            background-color: white
            padding: 15px
            h3
                font-size: 1.2em
                white-space: nowrap
                text-overflow: ellipsis
                overflow: hidden
            p
                font-size: 1em
                letter-spacing: 1px
                line-height: 1.5em
                text-align: left
                color: rgba(black,0.5)
</style>
