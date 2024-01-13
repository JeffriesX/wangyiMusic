
import { getMusicList } from '@/api/findmusic'
export default {
  namespace: true,
  state () {
    return {
      footerBar: [{
        al: {
          id: 34928767,
          name: '天若有情',
          pic: 109951165958851920,
          picUrl: 'http://p2.music.126.net/hzs4pVOxFKS5J64nY-rugA==/109951165958851914.jpg',
          pic_str: '109951165958851914'
        }
      }],
      id: 438204707
    }
  },
  mutations: {
    setMusicList (state, newlist) {
      state.footerBar = newlist
    }
  },
  actions: {
    async getMusicList (context) {
      const { data } = await getMusicList()
      context.commit('setMusicList', data.playlist)
    }
  }
}
