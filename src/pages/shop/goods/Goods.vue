<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper">
        <ul ref="leftUl"><!--current-->
          <li class="menu-item" v-for="(good, index) in goods" 
              :key="index" :class="{current:index ===currentIndex}" @click="changeCurrent(index)">
            <span class="text bottom-border-1px">
              <img class="icon" :src="good.icon" v-show="good.icon">
              {{good.name}}
            </span>
          </li>

        </ul>
      </div>
      <div class="foods-wrapper">
        <ul ref="rightUl">
          <li class="food-list-hook" v-for="(good, index) in goods" :key="index">
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li class="food-item bottom-border-1px" v-for="(food, index) in good.foods" :key="index">
                <div class="icon">
                  <img width="57" height="57"
                       :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span></div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    CartControl组件
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        tops: [],
        scrollY: 0
      }
    },
    computed: {
      ...mapState(['goods']),
      currentIndex () {
        const {scrollY, tops} = this;
        let index = 0;
        //通过计算scrollY的数值跟tops中数值比较 得出索引
        index = tops.findIndex((top, index) => {
          return scrollY >= top && scrollY < tops[index+1] ;
        });
        if (this.topIndex !== index && this.leftScroll){
          const li = this.$refs.leftUl.children[index];
          this.topIndex = index;
          this.leftScroll.scrollToElement(li);
        }
        return index;
      }
    },
    mounted () {
      //采用callback + nextTick 在页面元素显示执行bscroll
      this.$store.dispatch('shopGoods',()=>{
        this.$nextTick(()=>{
          this.leftScroll = new BScroll('.menu-wrapper',{
            click: true
          });
          this.rightScroll = new BScroll('.foods-wrapper',{
            probeType:1
          });
          //初始化tops
          this._initTops();
          this._initScrollY();
        })
      });
    },
    methods: {
      _initTops () {
        const tops = [];
        let initTop = 0;
        tops.push(initTop);
        const lis = this.$refs.rightUl.getElementsByClassName('food-list-hook');
        // lis.__proto__ = Array.prototype;
        Array.prototype.slice.call(lis).forEach(li =>{
          initTop += li.clientHeight;
          tops.push(initTop);
        });
        this.tops = tops;
      },
      _initScrollY () {
        //监听滚动何止scrollY值  probeType 为1 时惯性滚动没有监听 故加上scrollEnd事件
        this.rightScroll.on('scroll',({x,y})=>{
          this.scrollY = Math.abs(y);
        });
        this.rightScroll.on('scrollEnd',({x,y})=>{
          this.scrollY = Math.abs(y);
        });
      },
      //点击左边栏  右边滑动到对应的内容  获取点击的下标
      changeCurrent (index) {
        const y = -this.tops[index];
        //通知左边栏滑动到哪个元素
        this.scrollY = -y;
        //右边栏滑动
        this.rightScroll.scrollTo(0,y, 500);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .goods
    display: flex
    position: absolute
    top: 235px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: $green
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>

