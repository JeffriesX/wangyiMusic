import request from '@/utils/request'

// 获取歌单详情
export const getMusicList = (id) => {
  return request.get(`/playlist/detail?id=${id}`)
}
