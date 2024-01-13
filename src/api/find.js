import request from '@/utils/request'

// 获取轮播图
export const getBanner = () => {
  return request.get('/banner?type=2')
}

// 获取 发现好歌单
export const findMusic = () => {
  return request.get('/personalized?limit=10')
}
