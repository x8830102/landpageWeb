<template>
  <div class="container">
    <div class="OnlineBlock">
        <h4 class="title">精選影音課程</h4>
        <div class="row">
            <div class="col-lg-6">
                <big-card :data="informations.big"></big-card>
            </div>
            <div class="col-lg-6 row left">
                <div class="col-sm-6" v-for="infos in informations.small"><small-card :data="infos"></small-card></div>
            </div>  
        </div>
        <div class="row bottom">
            <div class="col-lg-4 mt-4" v-for="infos in informations.middle"><middle-card :data="infos"></middle-card></div>
        </div>
        <div class="mt-4 text-right">
            <a href="https://panacademy.asia/" target="_blank" class="btn btn-primary">更多活動</a>
        </div>
    </div>
  </div>
</template>

<script>

import BigCard from './BigCard'
import SmallCard from './SmallCard'
import MiddleCard from './MiddleCard'
import {Store} from './../../assets/js/store'
export default {
  components: {
    BigCard,
    SmallCard,
    MiddleCard
  },
  data () {
    return {
        informations: Store.$data.informations[0]
    }
  }
}
</script>
<style lang="sass" scoped>
@import "./../../assets/sass/variable.sass";
.OnlineBlock
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

