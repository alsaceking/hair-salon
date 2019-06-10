<template>
  <div class="barber">
    <div class="scroll-wrapper">
      <cube-scroll ref="scroll"
                   :data="barberList"
      >
        <ul class="barber-list">
          <li class="barber-item" v-for="(item, index) in barberList" :key="index">
            <div class="barber-card">
              <img :src="item.picUrl" alt=""/>
              <div class="desc">
                <p class="name">{{item.name}}</p>
                <p class="major">{{item.major}}</p>
                <p class="introduce">{{item.introduce}}</p>
                <span class="tag"><i class="cubeic-tag"></i></span>
              </div>
            </div>
          </li>
        </ul>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      barberList: [
        {
          picUrl: 'http://p.qpic.cn/music_cover/Lx27YkJbgzz13bmnBEfLujrhbXTzwpFweViaJ6HL1cCoMe60B0hEE7A/600?n=1',
          name: 'tony',
          score: 4.6,
          major: '精通轻熟女',
          introduce: '各种父女发型'
        },
        {
          picUrl: 'http://p.qpic.cn/music_cover/Lx27YkJbgzz13bmnBEfLujrhbXTzwpFweViaJ6HL1cCoMe60B0hEE7A/600?n=1',
          name: 'tony',
          score: 4.6,
          major: '精通轻熟女',
          introduce: '各种父女发型'
        },
        {
          picUrl: 'http://p.qpic.cn/music_cover/Lx27YkJbgzz13bmnBEfLujrhbXTzwpFweViaJ6HL1cCoMe60B0hEE7A/600?n=1',
          name: 'tony',
          score: 4.6,
          major: '精通轻熟女',
          introduce: '各种父女发型'
        },
        {
          picUrl: 'http://p.qpic.cn/music_cover/Lx27YkJbgzz13bmnBEfLujrhbXTzwpFweViaJ6HL1cCoMe60B0hEE7A/600?n=1',
          name: 'tony',
          score: 4.6,
          major: '精通轻熟女',
          introduce: '各种父女发型'
        },
        {
          picUrl: 'http://p.qpic.cn/music_cover/Lx27YkJbgzz13bmnBEfLujrhbXTzwpFweViaJ6HL1cCoMe60B0hEE7A/600?n=1',
          name: 'tony',
          score: 4.6,
          major: '精通轻熟女',
          introduce: '各种父女发型'
        }
      ]
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
  @import "~@/common/less/variable.less";
  @import "~@/common/less/mixin.less";

  .barber {
    position: relative;
    height: 100%;
    .scroll-wrapper {
      position: absolute;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
      .barber-list {
        overflow: hidden;
        .barber-item {
          width: 44%;
          padding-top: 10px;
          margin-bottom: 10px;
          float: left;
          &:nth-child(odd) {
            padding-left: 4%;
          }
          &:nth-child(even) {
            margin-left: 4%;
            padding-right: 4%;
          }
          .barber-card {
            overflow: hidden;
            border: 1px solid @color-border;
            border-radius: @radius-size-medium;
            font-size: 0;
            img {
              width: 100%;
            }
            .desc {
              position: relative;
              padding: 10px;
              font-size: @fontsize-large;
              .tag {
                position: absolute;
                top: 10px;
                right: 10px;
                width: 16px;
                height: 16px;
                color: @color-theme;
              }
              .name {
                color: @color-title;
              }
              .major {
                padding-top: 5px;
              }
              .introduce {
                padding: 5px 0 10px;
              }
              .major, .introduce {
                font-size: @fontsize-small;
                color: @color-text-ll;
              }
            }
          }
        }
      }
    }
  }
</style>
