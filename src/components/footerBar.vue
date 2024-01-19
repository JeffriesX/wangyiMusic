<template>
    <div class="footerBar">
      <div class="footer-left">
        <img :src="footerBar[defaultIndex].al?.picUrl" alt="" class="placardImg">
        <div class="musicName-singer">
          <div class="music-name">{{ footerBar[defaultIndex].al?.name }}</div>
          <div class="music-singer">{{ footerBar[defaultIndex].ar[0].name }}</div>
        </div>
      </div>
      <div class="footer-right">
        <i class="play-btn iconfont" @click="playMusicBtn()">&#xe833;</i>
        <i class="menu-btn iconfont">&#xee33;</i>
      </div>
      <audio class="audioSet" :src="`https://music.163.com/song/media/outer/url?id=${footerBar[defaultIndex].id}.mp3 `"></audio>
    </div>
  </template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      audioFlag: false
    }
  },
  name: 'footerIndex',
  computed: {
    ...mapState('footerBar', ['footerBar', 'defaultIndex', 'isPlayBtnShow'])
  },
  methods: {
    playMusicBtn () {
      const audioSet = document.querySelector('.audioSet')
      const playBtn = document.querySelector('.play-btn')
      if (audioSet.paused === true) {
        audioSet.play()
        playBtn.innerHTML = '&#xe831;'
      } else {
        audioSet.pause()
        playBtn.innerHTML = '&#xe833;'
      }
    }
  },
  watch: {
    isPlayBtnShow (newVal) {
      const audioSet = document.querySelector('.audioSet')
      const playBtn = document.querySelector('.play-btn')
      if (newVal === true) {
        audioSet.autoplay = true
        playBtn.innerHTML = '&#xe831;'
      } else {
        audioSet.pause()
        playBtn.innerHTML = '&#xe833;'
      }
    },
    deep: true,
    immediate: true
  }
}
</script>

<style lang="less" scoped>
  .footerBar{
    width: 100%;
    height: 55px;
    background-color: white;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
    font-size: 15px;
    border-top:1px solid rgb(168, 168, 168);
    .footer-left{
      display: flex;
      align-items: center;
      // height: 50px;
      .placardImg{
        width: 38px;
        height: 38px;
        border-radius: 19px;
      }
      .musicName-singer{
        margin-left: 10px;
        // .music-name{}
        .music-singer{
          font-size: 13px;
          color: rgb(168, 168, 168);
        }
      }
    }
    .footer-right{
      display: flex;
      align-items: center;
      .play-btn{
        font-size: 33px;
      }
      .menu-btn{
        font-size: 30px;
        margin-left: 10px;
      }
    }
  }
</style>
