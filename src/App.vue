<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  name:'App',
  mounted () {
    // this.$store.dispatch('getAddress')
    this.getAddress();
    this.getUerInfo();
  },
  methods:{
    ...mapActions(['getAddress','getUerInfo'])
  },
  components:{
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
  width 100%
  height 100%
  background #f5f5f5
</style>
