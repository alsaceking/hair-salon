<template>
  <div class="barber-shop-details">
    <div class="back-wrapper">
      <div @click="goBack" class="back">
        <i class="cubeic-back"></i>
      </div>
    </div>
    <div class="header-introduce">
      <h1 class="title">DOD时尚造型</h1>
      <div class="ad-wrapper">
        <cube-scroll
          ref="scroll"
          :data="ads"
          direction="horizontal"
          class="horizontal-scroll-list-wrap">
          <ul class="list-wrapper">
            <li v-for="(item, index) in ads" :key="index" class="list-item">
              <img :src="item.imgUrl" alt="" class="img">
            </li>
          </ul>
        </cube-scroll>
      </div>
      <div class="address-wrapper">
        <span class="location"><i class="cubeic-location"></i></span>
        <p class="text">朝阳区 芍药居 樱花东街甲2号</p>
        <a class="phone" href="tel:186585858586"><i class="cubeic-phone"></i></a>
      </div>
    </div>
    <tab :tabs="tabs"></tab>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Service from '@/components/barber-shop-details/service/service'
import Barber from '@/components/barber-shop-details/barber/barber'
import Ratings from '@/components/barber-shop-details/ratings/ratings'

export default {
  data() {
    return {
      ads: [
        {
          imgUrl: require('@/common/image/ad011.jpg')
        },
        {
          imgUrl: require('@/common/image/ad022.jpg')
        }
      ]
    }
  },
  computed: {
    tabs() {
      return [
        {
          label: '服务',
          component: Service,
          data: {
            seller: []
          }
        },
        {
          label: '理发师',
          component: Barber,
          data: {
            seller: []
          }
        },
        {
          label: '评价',
          component: Ratings,
          data: {
            seller: []
          }
        }
      ]
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  },
  components: {
    Tab,
    // eslint-disable-next-line
    Service,
    // eslint-disable-next-line
    Barber,
    // eslint-disable-next-line
    Ratings
  }
}
</script>

<style scoped lang="less">
  @import "~@/common/less/variable.less";
  @import "~@/common/less/mixin.less";

  .barber-shop-details {
    position: fixed;
    z-index: 100;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: @color-background;
    .back-wrapper {
      position: relative;
      height: 24px;
      padding: 10px;
      .back {
        position: absolute;
        top: 10px;
        left: 10px;
        width: 24px;
        height: 24px;
        color: @color-theme;
        i {
          font-size: @fontsize-large-xxx;
        }
      }
    }
    .header-introduce {
      padding: 0 15px;
      .title {
        font-size: @fontsize-large-xxx;
        color: @color-title;
        font-weight: 400;
        .no-wrap();
      }
      .ad-wrapper {
        width: 100%;
        height: 150px;
        padding: 10px 0;
        .horizontal-scroll-list-wrap {
          /deep/ .cube-scroll-content {
            display: inline-block;
          }
          .list-wrapper {
            height: 150px;
            white-space: nowrap;
            .list-item {
              display: inline-block;
              & + .list-item {
                margin-left: 15px;
              }
              .img {
                border-radius: @radius-size-medium;
                width: 280px;
                height: 150px;
              }
            }
          }
        }
      }
      .address-wrapper {
        display: flex;
        position: relative;
        padding-bottom: 10px;
        .location {
          margin-right: 10px;
        }
        .location, .phone {
          width: 20px;
          height: 20px;
          font-size: @fontsize-large-xx;
          color: @color-text-ll;
        }
        .text {
          flex: 1;
          line-height: 20px;
          font-size: @fontsize-medium;
          color: @color-text-ll;
          .no-wrap();
        }
      }
    }
  }
</style>
