<template>
  <div class="container">
    <div class="OfflineBlock">
        <h4 class="title">精選實體課程</h4>
        <div class="row">
            <div class="col-lg-3 col-md-6 mb-1" v-for="infos in informations.small"><small-card :data="infos"></small-card></div>
        </div>
        <div class="row bottom">
            <div class="col-lg-4 mt-4" v-for="infos in informations.middle"><middle-card :data="infos"></middle-card></div>
        </div>
        <div class="mt-4 text-right">
            <a href="https://events.panmedia.asia/hosts/7261611697290253/%E6%B3%9B%E7%A7%91%E5%AD%B8%E9%99%A2/now/page/1?count=10" target="_blank" class="btn btn-primary">更多活動</a>
        </div>
    </div>
  </div>
</template>

<script>

import BigCard from './BigCard'
import SmallCard from './SmallCard'
import MiddleCard from './MiddleCard'
import {Store} from './../../assets/js/store'
// import Slidbar from './HomeComponents/Slidbar'
export default {
  components: {
    BigCard,
    SmallCard,
    MiddleCard
  },
  data () {
    return {
        informations: Store.$data.informations[1]
    }
  }
}
</script>
<style lang="sass" scoped>
@import "./../../assets/sass/variable.sass";
.OfflineBlock
    background-color: #eee
    padding: 40px
    .title
        text-align: left
        border-left: solid 4px black
        padding-left: 15px
        margin-bottom: 25px
        letter-spacing: 2px
    .left
        padding: 0px
        margin: 0px
    .btn-primary
        background-color: $second_color
        border: none
        width: 160px
        heigth: 50px
        &:hover
            background-color: lighten($second_color,10%)
        &:focus
            color: white
            border: none
            outline: none
            box-shadow: none
    @media (max-width: 991px)
        .left
            margin-top: 25px
</style>

