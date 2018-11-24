<template>
  <div class="rating-wrapper">
    <ul>
      <li class="rating-item" v-for="(rating, index) in ratings" :key="index">
        <div class="avatar">
          <img width="28" height="28" :src="rating.avatar">
        </div>
        <div class="content">
          <h1 class="name">{{rating.username}}</h1>
          <div class="star-wrapper">
            <Start :size="24" :score="rating.score"/>
            <span class="delivery">{{rating.deliveryTime}}</span>
          </div>
          <p class="text">{{rating.text}}</p>
          <div class="recommend">
            <span class="iconfont icon-thumb_up"></span>
          </div>
          <div class="time">{{rating.rateTime | format}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import Start from '../../components/star/Start.vue';
  export default {
    props:{
      ratings: Array
    },
    components:{
      Start
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus"  scoped>
  @import "../../common/stylus/mixins.styl"
  .rating-wrapper
    padding: 0 18px
    .rating-item
      display: flex
      padding: 18px 0
      bottom-border-1px(rgba(7, 17, 27, 0.1))
      .avatar
        flex: 0 0 28px
        width: 28px
        margin-right: 12px
        img
          border-radius: 50%
      .content
        position: relative
        flex: 1
        .name
          margin-bottom: 4px
          line-height: 12px
          font-size: 10px
          color: rgb(7, 17, 27)
        .star-wrapper
          margin-bottom: 6px
          font-size: 0
          .star
            display: inline-block
            margin-right: 6px
            vertical-align: top
          .delivery
            display: inline-block
            vertical-align: top
            line-height: 12px
            font-size: 10px
            color: rgb(147, 153, 159)
        .text
          margin-bottom: 8px
          line-height: 18px
          color: rgb(7, 17, 27)
          font-size: 12px
        .recommend
          line-height: 16px
          font-size: 0
          .icon-thumb_up, .icon-thumb_down, .item
            display: inline-block
            margin: 0 8px 4px 0
            font-size: 9px
          .icon-thumb_up
            color: $yellow
          .icon-thumb_down
            color: rgb(147, 153, 159)

          .item
            padding: 0 6px
            border: 1px solid rgba(7, 17, 27, 0.1)
            border-radius: 1px
            color: rgb(147, 153, 159)
            background: #fff
        .time
          position: absolute
          top: 0
          right: 0
          line-height: 12px
          font-size: 10px
          color: rgb(147, 153, 159)
</style>
