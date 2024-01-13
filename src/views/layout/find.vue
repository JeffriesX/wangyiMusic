<template>
    <div class="find">
      <!-- swipe部分 -->
      <div class="swiper">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image.pic" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 第三部分列表 -->
      <div class="third-list">
        <div class="sortList">
          <i class="iconfont">&#xe61a;</i>
          <div class="p">每日推荐</div>
        </div>
        <div class="sortList">
          <i class="iconfont">&#xe615;</i>
          <div class="p">私人FM</div>
        </div>
        <div class="sortList">
          <i class="iconfont">&#xe619;</i>
          <div class="p">歌单</div>
        </div>
        <div class="sortList">
          <i class="iconfont">&#xe617;</i>
          <div class="p">排行榜</div>
        </div>
      </div>

      <!-- 发现好歌单部分 -->
      <div class="findMusic">
          <div class="top-item">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
          </div>
          <div class="buttom-item">
            <div class="pic-item"
                  v-for="item in findMusic" :key="item.id"
                  @click="$router.push(`/findmusic/${item.id}`)">
              <div class="picBox" :style="{backgroundImage:`url(${item.picUrl})`}">
                <div class="playCount">▶{{changeCount(item.playCount)}}</div>
              </div>
              <div class="buttom-text">{{item.name}}</div>
            </div>
          </div>
      </div>

    </div>
  </template>

<script>
import { getBanner, findMusic } from '@/api/find'
export default {
  name: 'findIndex',
  data () {
    return {
      images: [],
      findMusic: []
    }
  },
  async created () {
    const { data: { banners } } = await getBanner()
    this.images = banners

    const { data: { result } } = await findMusic()
    // console.log(result)
    this.findMusic = result
  },
  methods: {
    changeCount (num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(0) + '亿'
      } else {
        return (num / 10000).toFixed(0) + '万'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.find{
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 0 11px;
}
  //轮播图
  div .van-swipe{
    width: 100%;
    height: 138px;
    border-radius: 10px;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
      padding: 0 .5px;
    }
  }
  //第三行分类部分
  .third-list{
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    .sortList{
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: 10px;
    i{
      margin: 10px;
      font-size: 40px;
      color: rgb(255, 30, 0);
    }
  }
  }
  //发现好歌单部分
  .findMusic{
    margin-top: 20px;
    font-size: 15px;
    .top-item{
      display: flex;
      justify-content: space-between;
      .title{
        font-size: 19px;
        font-weight: 900;
      }
      .more{
        display: flex;
        width: 75px;
        height: 27px;
        line-height: 27px;
        justify-content: center;
        border: .8px solid rgb(154, 154, 154);
        border-radius: 13px;
      }
    }
    .buttom-item::-webkit-scrollbar{
        display: none;
      }
    .buttom-item{
      margin-top: 10px;
      display: flex;
      overflow: auto;

      .pic-item{
        width: 110px;
        margin-right: 10.5px;
        .picBox{
          width: 110px;
          height: 110px;
          background-size: 100%;
          border-radius: 10px;
          box-shadow: 3px 3px 3px rgba(133, 130, 129, 0.5);
          .playCount{
            color: rgb(241, 241, 241);
            float: right;
            padding: 5px;
          }
        }
      }
      .buttom-text{
        margin-top: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }

  </style>
