/*
 * @Description: 
 * @Author: Author
 * @Date: 2022-06-20 11:02:10
 * @LastEditTime: 2022-07-27 16:57:22
 * @LastEditors: Author
 */
import getStorage from './getStorage'
import {
  getItem
} from './utils'

function getAllStorage(config) {
  let result = null
  // 获取所有的数据
  const storeData = getItem(config.prefix, config.type)
  const global__store = storeData ? JSON.parse(storeData) : null;
  if (!global__store) return null;

  // 遍历所有的项目
  result = {}
  for (const key in global__store) {
    const store = getStorage(key, config, true)
    if (store) result[key] = store
  }

  return result
}

export default getAllStorage