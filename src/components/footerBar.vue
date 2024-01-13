<template>
    <div class="footerBar">
      <div class="footer-left">
        <img src="https://p1.music.126.net/8kppJUKiT2db029QyqtoeQ==/7819726697159115.jpg" alt="" class="placardImg">
        <div class="musicName-singer">
          <div class="music-name">歌名</div>
          <div class="music-singer">歌手</div>
        </div>
      </div>
      <div class="footer-right">
        <i class="play-btn iconfont">&#xe833;</i>
        <i class="menu-btn iconfont">&#xee33;</i>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'footerIndex'
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
      }
    }
  }
</style>
