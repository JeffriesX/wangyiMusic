<template>
  <div class="findMusicBox">
    <!-- 上半部分（作者部分） -->
    <div class="createrItem" >
      <img :src="playlist.coverImgUrl" alt="" class="bigImg">
      <div class="topBar" ref="topBarRef">
        <div class="leftBar">
          <i class="iconfont" @click="$router.go(-1)">&#xe604;</i>
          <div class="left-text">歌单</div>
        </div>
        <div class="rightBar">
          <i class="iconfont">&#xe609;</i>
          <i class="iconfont">&#xe608;</i>
        </div>
      </div>
      <div class="discribe">
        <div class="smallImg">
          <img :src="playlist.coverImgUrl" class="smallPic">
        </div>
        <div class="rightItem">
          <div class="name">{{ playlist.name }}</div>
          <div class="creater">
            <img :src="playlist.creator?.avatarUrl" alt="" class="avatarImg">
            <div class="creater-name">{{ playlist.creator?.nickname }}</div>
            <div class="right-arrow">></div>
          </div>
          <div class="disText">{{ playlist.description }}</div>
        </div>
      </div>
      <div class="operateList">
        <div class="list comment">
          <i class="iconfont">&#xe763;</i>
          <div class="listText">{{ playlist.commentCount }}</div>
        </div>
        <div class="list share">
          <i class="iconfont">&#xebab;</i>
          <div class="listText">{{ playlist.shareCount }}</div>
        </div>
        <div class="list download">
          <i class="iconfont">&#xe72a;</i>
          <div class="listText">下载</div>
        </div>
        <div class="list mlChoice">
          <i class="iconfont">&#xe61e;</i>
          <div class="listText">多选</div>
        </div>
      </div>
    </div>
    <!-- 下半部分（歌单） -->
    <div class="tracks">
      <div class="tracks-top">
        <div class="playAll">
          <i class="playBtn iconfont">&#xe833;</i>
          <div class="text-left">全部播放</div>
          <div class="text-right">(共{{ playlist.trackCount }}首)</div>
        </div>
        <div class="collect-btn">+ 收藏({{ playlist.trackCount }})</div>
      </div>
      <div class="tracks-list">
        <div class="musicList" v-for="(item, i) in tracks" :key="item.id">
          <div class="musicItem" @click="playMusic(i)">
            <div class="sort">{{ i+1 }}</div>
            <div class="musicName">
              <div class="name">{{ item.al.name }}</div>
              <div class="singer">{{ item.ar[0].name }}</div>
            </div>
          </div>
          <div class="btnItem-right">
            <i class="arrow left-arrow iconfont" style="display: none;">&#xe832;</i>
            <i class="arrow right-arrow iconfont">&#xe608;</i>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { getMusicList } from '@/api/findmusic'
export default {
  name: 'findMusicList',
  computed: {
    getMusicId () {
      return this.$route.params.id
    }
  },
  data () {
    return {
      playlist: [],
      tracks: '',
      musicListId: this.$route.params.id,
      scrollTop: 0
    }
  },
  methods: {
    playMusic (defaultNum) {
      this.$store.dispatch('footerBar/getItemList', this.playlist.id)
      this.$store.commit('footerBar/defaultIndexUpdate', defaultNum)
      this.$store.commit('footerBar/isPlayBtnShow', true)
      // console.log(this.footerList)
    }
  },
  async created () {
    const { data } = await getMusicList(
      this.musicListId
    )
    // console.log(data)
    this.playlist = data.playlist
    this.tracks = data.playlist.tracks
    // console.log(this.tracks.ar[0])
    // console.log(this.playlist)

    window.addEventListener('scroll', function () {
      const topBar = document.querySelector('.topBar')
      const n = document.documentElement.scrollTop
      if (n === 0) {
        topBar.style.backgroundColor = 'rgba(255, 255, 255, 0)'
        topBar.style.color = 'rgba(255, 255, 255, 1)'
      } else if (n > 0 || n <= 235) {
        topBar.style.backgroundColor = `rgba(255, 255, 255, ${n / 235})`
        topBar.style.color = `rgba(${255 - n}, ${255 - n}, ${255 - n}, ${n / 235})`
      }
    })
  }
}
</script>

<style lang="less" scoped>
.findMusicBox{
  padding: 10px;
  overflow: hidden;
}
//上半部分
  .createrItem{
    margin: 0;
    width: 100%;
    height: 300px;
    position: relative;
    color: white;
    font-size: 15px;
    padding-top: 35px;
    .bigImg{
      position: absolute;
      width: 115%;
      height: 350px;
      z-index: -1;
      filter: blur(15px);
      left: -20px;
      top: -10px;
    }
    .topBar{
      height: 50px;
      line-height: 40px;
      display: flex;
      justify-content: space-between;
      padding: 5px 10px;
      font-size: 20px;
      width: 100%;
      box-sizing: border-box;
      position: fixed;
      top: 0px;
      left: 0;
      z-index: 10;
      background-color: rgba(255, 255, 255, 0);
      .leftBar{
        display: flex;
        i{
          font-size: 30px;
          margin-right: 15px;
        }
      }
      .rightBar{
        display: flex;
        i{
          font-size: 30px;
          margin-left: 20px;
        }
      }
    }
  }
  .discribe{
    width: 100%;
    font-size: 12px;
    display: flex;
    height: 130px;
    margin-top: 5px;
    justify-content: space-between;
    overflow: hidden;
    .smallImg{
      width: 130px;
      height: 130px;
      border-radius: 15px;
      overflow: hidden;
      .smallPic{
        width: 100%;
      }
    }
    .rightItem{
      display: flex;
      flex-flow: column;
      width: 210px;
      height: 130px;
      .name{
        width: 100%;
        height: 40px;
        overflow: hidden;
        font-size: 16px;
        font-weight: bold;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .creater{
        display: flex;
        color: rgb(229, 229, 229);
        font-size: 15px;
        height: 35px;
        line-height: 30px;
        margin-top: 11px;
        .avatarImg{
          width: 35px;
          height: 35px;
          border-radius: 30px;
        }
        .creater-name{
          margin-left: 10px;
        }
        .right-arrow{
          margin-left: 5px;
        }
      }
      .disText{
        display: -webkit-box;
        margin-top: 12px;
        font-size: 12px;
        height: 32px;
        width: 100%;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        color: rgb(229, 229, 229);
      }
    }
  }

  .operateList{
    margin-top: 15px;
    font-size: 15px;
    display: flex;
    justify-content: space-around;
    i{
        font-size: 28px;
    }
    .listText{
      margin-top: 10px;
    }
    .list{
      width: 40px;
      display: flex;
      flex-flow: column;
      align-items: center;
    }
    .comment{
      i{
        font-size: 32px;
      }
    }
    .share{
      margin-top: -3px;
      i{
        font-size: 36px;
        margin-top: -1px;
      }
    }
    .download{
      .listText{
        margin-top: 11px;
      }
    }
    .mlChoice{
      .listText{
        margin-top: 7px;
      }
      i{
        margin-top: -1px;
        font-size: 33px;
      }
    }
  }
  //下半部分
  .tracks{
    position: absolute;
    display: flex;
    flex-flow: column;
    left: 0px;
    top: 285px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    font-size: 15px;
    padding: 10px;
    background-color: white;
    border-radius: 25px 25px;
    .tracks-top{
      width: 100%;
      height: 40px;
      line-height: 40px;
      display: flex;
      justify-content: space-between;
      .playAll{
        display: flex;
        .playBtn{
          font-size: 28px;
          margin-top: -1px;
        }
        .text-left{
          margin-left: 5px;
          font-size: 17px;
        }
        .text-right{
          font-size: 12px;
        }
      }
      .collect-btn{
        color: white;
        height: 40px;
        font-size: 15px;
        text-align: center;
        border-radius: 20px;
        display: flex;
        padding: 0 8px;
        background-color: red;
      }
    }
  }
  .tracks-list{
    display: flex;
    flex-flow: column;
    .musicList{
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 15px;
      //注意点
      // overflow: auto;
      .musicItem{
        display: flex;
        align-items: center;
        .sort{
          color: rgb(196, 195, 195);
        }
        .musicName{
          height: 40px;
          margin-left: 10px;
          display: flex;
          flex-flow: column;
          justify-content: space-between;
          .name{
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            color: black;
          }
          .singer{
            font-size: 13px;
            color: rgb(168, 168, 168);
          }
        }
      }
      .btnItem-right{
        color: rgb(168, 168, 168);
        display: flex;
        .arrow{
          margin-left: 20px;
          font-size: 30px;
        }
      }
    }
    .active{
      display: block;
    }
  }
</style>
