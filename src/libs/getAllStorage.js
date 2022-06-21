/*
 * @Description: 
 * @Author: Author
 * @Date: 2022-06-20 11:02:10
 * @LastEditTime: 2022-06-21 09:49:28
 * @LastEditors: Author
 */
import getStorage from './getStorage'

function getAllStorage(config) {
  let result = null
  // 获取所有的数据
  const storeData = window.localStorage.getItem(config.prefix)
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