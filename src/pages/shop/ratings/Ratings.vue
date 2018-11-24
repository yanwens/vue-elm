<template>
  <div class="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{info.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{info.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <Start :size="24" :score="info.serviceScore"/>
            <span class="score">{{info.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <Start :size="24" :score="info.foodScore"/>
            <span class="score">{{info.foodScore}}</span></div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{info.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <Split/>
      <RatingSelect
                    :selectType="selectType"
                    :isContent="isContent"
                    @setSelectType="setSelectType"
                    @toggleIsContent="toggleIsContent"/>
      <ShopRating :ratings="filterRatings"/>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex';
  import BScroll from 'better-scroll';
  import RatingSelect from '../../../components/rating-select/RatingSelect.vue';
  import Start from '../../../components/star/Start.vue';
  import ShopRating from '../../../components/shop-rating/ShopRating.vue';
  export default {
    data () {
      return {
        selectType: 0,   //2全部  0推荐  1吐槽
        isContent: true,  //是否显示有内容

      }
    },
    computed: {
      ...mapState(['info', 'ratings']),
      ...mapGetters(['ratingTotalCount', 'ratingRecommendCount']),
      filterRatings () {
        const {selectType, isContent, ratings} = this;
        return ratings.filter(rating=>{
          //rateType 为0 是好评
          /*
          * 条件1  全部  有无内容  selectType === 2 || isContent
          * 条件2  推荐  有无内容  rateType0   rateType === selectType
          * 条件3  吐槽  有无内容  rateType1
          *
          * (selectType === 2 || rateType === selectType) && (isContent === false ||  text.leng>0)
          * */
          const {rateType, text} = rating;
          return (selectType===2 || selectType===rateType) && (isContent===false || text.length>0)
        });
      }
    },
    mounted () {
      this.$store.dispatch('shopRatings',()=>{
        this.$nextTick(()=>{
          new BScroll('.ratings')
        })
      });
    },
    methods: {
      setSelectType (selectType) {
        this.selectType = selectType;
      },
      toggleIsContent () {
        this.isContent = !this.isContent;
      }
    },
    components: {
      RatingSelect,
      Start,
      ShopRating
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .ratings
    position: absolute
    top: 235px
    bottom: 0
    left: 0
    width: 100%
    overflow: hidden
    background: #fff
    .overview
      display: flex
      padding: 18px 0
      .overview-left
        flex: 0 0 137px
        padding: 6px 0
        width: 137px
        border-right: 1px solid rgba(7, 17, 27, 0.1)
        text-align: center
        @media only screen and (max-width: 320px)
          flex: 0 0 120px
          width: 120px
        .score
          margin-bottom: 6px
          line-height: 28px
          font-size: 24px
          color: rgb(255, 153, 0)
        .title
          margin-bottom: 8px
          line-height: 12px
          font-size: 12px
          color: rgb(7, 17, 27)
        .rank
          line-height: 10px
          font-size: 10px
          color: rgb(147, 153, 159)
      .overview-right
        flex: 1
        padding: 6px 0 6px 24px
        @media only screen and (max-width: 320px)
          padding-left: 6px
        .score-wrapper
          margin-bottom: 8px
          font-size: 0
          .title
            display: inline-block
            line-height: 18px
            vertical-align: top
            font-size: 12px
            color: rgb(7, 17, 27)
          .star
            display: inline-block
            margin: 0 12px
            vertical-align: top
          .score
            display: inline-block
            line-height: 18px
            vertical-align: top
            font-size: 12px
            color: rgb(255, 153, 0)
        .delivery-wrapper
          font-size: 0
          .title
            line-height: 18px
            font-size: 12px
            color: rgb(7, 17, 27)
          .delivery
            margin-left: 12px
            font-size: 12px
            color: rgb(147, 153, 159)

</style>

