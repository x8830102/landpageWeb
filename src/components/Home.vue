<template>
  <div class="container-fulid">
    <Header></Header>
    <section class="container slideBox">
      <Slidbar></Slidbar>
    </section>
    <main class="mt-4 mb-5">
      <online-active></online-active>
    </main>
    <section class="mt-4 mb-5">
      <offline-active></offline-active>
    </section>
    <section class="mt-4 mb-5">
      <reel-box></reel-box>
    </section>
    <footer>
      <my-footer></my-footer>
    </footer>
  </div>
</template>

<script>

import Header from './HomeComponents/Header'
import Slidbar from './HomeComponents/Slidbar'
import OnlineActive from './HomeComponents/OnlineActive'
import OfflineActive from './HomeComponents/OfflineActive'
import MyFooter from './HomeComponents/MyFooter'
import ReelBox from './HomeComponents/ReelBox'
import VedioBar from './HomeComponents/VedioBar'
export default {
  components: {
    Header,
    Slidbar,
    OnlineActive,
    OfflineActive,
    MyFooter,
    ReelBox,
    VedioBar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="sass" scoped>
@media (max-width: 991px)
  .slideBox
    margin: 0
    padding: 0
    width: 100%
    max-width: 100%
</style>

