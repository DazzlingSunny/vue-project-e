<template>
  <section class="search">
    <HeaderTop title="搜索"/>
    <form class="search_form" @submit.prevent="search">
      <input class="search_input" placeholder="请输入商家名称" type="search" v-model="keyword">
      <input  class="search_submit" type="submit">
    </form>
    <section class="list" v-if="!noSearchShops">
      <ul class="list_container">
        <router-link :to="{path:'/shop',query:{id:item.id}}" tag="li"
                     v-for="item in searchShops" :key="item.id" class="list_li">
          <section class="item_left">
            <img class="restaurant_img" :src="imgBaseUrl + item.img_path">
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p><span>{{ item.name }}</span></p>
              <p>月售 {{ itme.month_sales || item_recent_order_num }} 单</p>
              <p>{{ item_delivery_fee || item.float_minimum_order_amount }} 元起送 / 距离 {{ item.distance }} 公里</p>
            </div>
          </section>
        </router-link>
      </ul>
    </section >

    <div class="search_none" v-else>很抱歉！无搜索结果</div>
  </section>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import {mapState} from 'vuex'

export default {
  name: "Msite",
  data(){
    return{
      keyword:'',
      imgBaseUrl:'http://cangdu.org:8001/img/',
      noSearchShops: false
    }
  },
  computed:{
    ...mapState(['searchShops'])
  },
  components: {
    HeaderTop
  },
  methods:{
    search(){
      //得到搜索关键字
      const keyword = this.keyword.trim()
      //进行搜索
      if(keyword){
        this.$store.dispatch('searchShops',keyword)
      }
    }
  },
  watch:{
    searchShops(value){
      if(!value.length){ //没有数据
        this.noSearchShops = true
      }else{ //有数据
        this.noSearchShops = false
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
.search
  width 100%
  height 100%
  overflow hidden
  .search_form
    clearFix()
    margin-top 45px
    background-color #fff
    padding 12px 8px
    input
      height 35px
      padding 0 4px
      border-radius 2px
      font-weight bold
      outline none
      &.search_input
        float left
        width 79%
        border 4px solid #f2f2f2
        font-size 14px
        color #333
        background-color #f2f2f2
      &.search_submit
        float right
        width 18%
        border 4px solid #02a774
        font-size 16px
        color #fff
        background-color #02a774

  .list
    .list_container
      background-color: #fff;
      .list_li
        display: flex;
        justify-content: center;
        padding: 10px
        border-bottom: 1px solid $bc;
        .item_left
          margin-right: 10px
          .restaurant_img
            width 50px
            height 50px
            display block
        .item_right
          font-size 12px
          flex 1
          .item_right_text
            p
              line-height 12px
              margin-bottom 6px
              &:last-child
                margin-bottom 0
  .search_none
    margin: 0 auto
    color: #333
    background-color: #fff
    text-align: center
    margin-top: 0.125rem
</style>
