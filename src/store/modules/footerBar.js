
import { getItemList } from '@/api/findmusic'
export default {
  namespaced: true,
  state () {
    return {
      footerBar: [{
        al: {
          id: 3186121,
          name: '悟空',
          pic: 3333719255417035,
          picUrl: 'https://p2.music.126.net/gn4pPKc_Wk3EyByfi86lUQ==/3333719255417035.jpg'
        },
        ar: [{ name: '歌手' }],
        id: 33162226
      }],
      defaultIndex: 0,
      isPlayBtnShow: false
    }
  },
  mutations: {
    setMusicList (state, newlist) {
      state.footerBar = newlist
      // state.defaultIndex = newlist
      // console.log(state.footerBar)
    },
    defaultIndexUpdate (state, newVal) {
      state.defaultIndex = newVal
      // console.log(newVal)
    },
    isPlayBtnShow (state, newVal) {
      state.isPlayBtnShow = newVal
    }
  },
  actions: {
    async getItemList (context, musicId) {
      const { data } = await getItemList(musicId)
      context.commit('setMusicList', data.songs)
      // console.log(musicId)
      // console.log(data)
    }
  }
}
