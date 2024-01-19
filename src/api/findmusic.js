import request from '@/utils/request'

// 获取歌单详情
export const getMusicList = (id) => {
  return request.get(`/playlist/detail?id=${id}`)
}

// 获取歌曲数据
export const getItemList = (musicId) => {
  return request.get(`/playlist/track/all?id=${musicId}&limit=10&offset=0`)
}
