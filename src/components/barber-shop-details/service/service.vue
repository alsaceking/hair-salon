<template>
  <div class="service">
    <div class="scroll-wrapper">
      <cube-scroll
        ref="scroll"
        :data="serviceList"
        :options="scrollOptions">
        <ul class="service-list">
          <li class="service-item" v-for="(item, index) in serviceList" :key="index">
            <div class="icon">
              <img :src="item.picUrl" alt="商家图片"/>
            </div>
            <div class="text">
              <h3 class="name">{{item.name}}</h3>
              <p class="price-wrap"><span class="tag">￥{{item.price}}</span></p>
              <p class="price-wrap"><span class="vip">会员价</span><span class="sub">￥{{item.vipPrice}}</span></p>
            </div>
          </li>
        </ul>
      </cube-scroll>
    </div>
    <div class="button-wrapper">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serviceList: [
        {
          name: '洗剪吹',
          price: 35,
          vipPrice: 23,
          picUrl: 'http://p.qpic.cn/music_cover/Lx27YkJbgzz13bmnBEfLujrhbXTzwpFweViaJ6HL1cCoMe60B0hEE7A/600?n=1'
        },
        {
          name: '烫发',
          price: 35,
          vipPrice: 23,
          picUrl: 'http://p.qpic.cn/music_cover/Lx27YkJbgzz13bmnBEfLujrhbXTzwpFweViaJ6HL1cCoMe60B0hEE7A/600?n=1'
        },
        {
          name: '染发',
          price: 35,
          vipPrice: 23,
          picUrl: 'http://p.qpic.cn/music_cover/Lx27YkJbgzz13bmnBEfLujrhbXTzwpFweViaJ6HL1cCoMe60B0hEE7A/600?n=1'
        },
        {
          name: '洗剪吹',
          price: 35,
          vipPrice: 23,
          picUrl: 'http://p.qpic.cn/music_cover/Lx27YkJbgzz13bmnBEfLujrhbXTzwpFweViaJ6HL1cCoMe60B0hEE7A/600?n=1'
        },
        {
          name: '洗剪吹',
          price: 35,
          vipPrice: 23,
          picUrl: 'http://p.qpic.cn/music_cover/Lx27YkJbgzz13bmnBEfLujrhbXTzwpFweViaJ6HL1cCoMe60B0hEE7A/600?n=1'
        },
        {
          name: '洗剪吹',
          price: 35,
          vipPrice: 23,
          picUrl: 'http://p.qpic.cn/music_cover/Lx27YkJbgzz13bmnBEfLujrhbXTzwpFweViaJ6HL1cCoMe60B0hEE7A/600?n=1'
        }
      ],
      scrollOptions: {
        directionLockThreshould: 0
      }
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
  @import "~@/common/less/variable.less";
  @import "~@/common/less/mixin.less";

  .service {
    height: 100%;
    position: relative;
    .scroll-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 48px;
      overflow: hidden;
      .service-list {
        padding-top: 15px;
        .service-item {
          display: flex;
          padding: 0 10px 15px;
          align-items: center;
          .icon {
            flex: 0 0 70px;
            width: 70px;
            font-size: 0;
            margin-right: 20px;
            img {
              width: 70px;
              height: 70px;
              border-radius: @radius-size-medium;
              opacity: .7;
            }
          }
          .text {
            flex: 1;
            align-self: center;
            padding: 5px 0;
            border-bottom: 1px solid @color-border;
            .name {
              padding-bottom: 10px;
              color: @color-title;
              font-size: @fontsize-large-x;
            }
            .price-wrap {
              padding-bottom: 5px;
              .tag {
                color: @color-theme;
                font-size: @fontsize-large-xxx;
              }
              .sub {
                margin-left: 5px;
                color: @color-text-ll;
              }
              .vip {
                display: inline-block;
                margin-left: 5px;
                padding: 3px;
                border: 1px solid @color-theme;
                border-radius: 2px;
                font-size: @fontsize-small-s;
                color: @color-theme;
              }
            }
          }
        }
      }
    }
    .button-wrapper {
      height: 48px;
    }
  }
</style>
