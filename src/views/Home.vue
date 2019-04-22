<template>
  <div class="home">
    <!-- <div>location</div> -->
    <div class="slide-wrap">
      <cube-slide :data="ad"/>
    </div>
    <div class="barber-shop-list">
      <h2 class="list-title">推荐商家</h2>
      <ul>
        <li class="item" @click="selectBarberShop(item.id)" v-for="(item, index) in barberList" :key="index">
          <div class="icon">
            <img :src="item.picUrl" alt="商家图片"/>
          </div>
          <div class="text">
            <h3 class="title">{{item.title}}</h3>
            <div class="rate-wrap">
              <div class="rate-star"><star :size="24" :score="item.score"></star></div>
              <div class="score">{{item.score}}</div>
              <span>共{{item.orderNums}}单</span>
            </div>
            <p class="price-wrap"><span class="tag">￥{{item.price}}</span>起<span class="sub">门市价:￥{{item.mainPrice}}</span></p>
            <p class="distance"><i class="cubeic-navigation"></i>距离您{{item.distance}}</p>
          </div>
        </li>
      </ul>
    </div>
    <transition name="slider">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Star from '@/components/star/star'

export default {
  data() {
    return {
      ad: [
        {
          url: 'https://y.qq.com/n/m/client/music_headline/index.html?_hidehd=1&_button=2&zid=1197699&ADTAG=myqq&from=myqq&channel=10007100',
          image: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1220009.jpg'
        },
        {
          url: 'https://y.qq.com/n/m/client/music_headline/index.html?_hidehd=1&_button=2&zid=1207497&ADTAG=myqq&from=myqq&channel=10007100',
          image: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1230092.jpg'
        },
        {
          url: 'https://y.qq.com/msa/362/198_7079.html?openinqqmusic=1&ADTAG=myqq&from=myqq&channel=10007100',
          image: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1232576.jpg'
        }
      ],
      barberList: [
        {
          id: 1123,
          title: 'XL美发馆',
          score: 4.2,
          price: 36,
          mainPrice: 45,
          orderNums: 3523,
          distance: '1.6km',
          picUrl: 'http://p.qpic.cn/music_cover/Lx27YkJbgzz13bmnBEfLujrhbXTzwpFweViaJ6HL1cCoMe60B0hEE7A/600?n=1'
        },
        {
          id: 2234,
          title: 'XL美发馆',
          score: 4.2,
          price: 36,
          mainPrice: 45,
          orderNums: 3523,
          distance: '1.6km',
          picUrl: 'http://p.qpic.cn/music_cover/Lx27YkJbgzz13bmnBEfLujrhbXTzwpFweViaJ6HL1cCoMe60B0hEE7A/600?n=1'
        }
      ]
    }
  },
  methods: {
    selectBarberShop(id) {
      this.$router.push({
        path: `/home/${id}`
      })
    }
  },
  components: {
    Star
  }
}
</script>

<style scoped lang="less">
@import "~@/common/less/variable.less";
  .slider-enter-active, .slider-leave-active {
    transition: all 0.3s;
  }
  .slider-enter, .slider-leave-to {
    transform: translate3d(100%, 0, 0);
  }
  .home {
    position: absolute;
    bottom: 61px;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px 10px 0;
    background-color: @color-white;
    .slide-wrap {
      overflow: hidden;
      height: 160px;
      border-radius: @radius-size-medium;
    }
    .barber-shop-list {
      .list-title {
        padding: 15px 0 0;
        color: @color-title;
        text-align: left;
        font-size: @fontsize-large;
        font-weight: 800;
      }
      .item {
        display: flex;
        align-items: center;
        padding-top: 15px;
        .icon {
          flex: 0 0 100px;
          width: 100px;
          padding-right: 20px;
          font-size: 0;
          img {
            width: 100px;
            height: 100px;
            border-radius: @radius-size-medium;
            opacity: .7;
          }
        }
        .text {
          flex: 1;
          overflow: hidden;
          font-size: @fontsize-small-s;
          color: @color-text-l;
          align-self: start;
          padding: 5px 0;
          border-bottom: 1px solid @color-border;
          .title {
            padding-bottom: 10px;
            color: @color-title;
            font-size: @fontsize-large-x;
          }
          .rate-wrap {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            .rate-star {
              margin-right: 5px;
            }
            .score {
              margin-right: 5px;
            }
          }
          .price-wrap {
            padding-bottom: 10px;
            .tag {
              color: @color-theme;
              font-size: @fontsize-large-xxx;
            }
            .sub {
              margin-left: 5px;
              color: @color-text-ll;
            }
          }
          .distance {
            i {
              margin-right: 3px;
            }
            color: @color-text-ll;
          }
        }
      }
    }
  }
</style>
