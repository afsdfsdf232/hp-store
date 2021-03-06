/*
 * @Description: 
 * @Author: Author
 * @Date: 2022-06-20 11:02:21
 * @LastEditTime: 2022-07-27 16:59:27
 * @LastEditors: Author
 */
import getKeyName from './key'
import {
  getItem,
  setItem
} from './utils'

function removeStorage(keys, config) {
  const storeData = getItem(config.prefix, config.type)
  const global__store = storeData ? JSON.parse(storeData) : null;
  if (!global__store) return true
  // 过滤掉要删除的 key
  const new_global__store = {}
  const keyNames = []
  if (Array.isArray(keys)) {
    for (let i = 0; i < keys.length; i++) {
      keyNames.push(getKeyName(config, keys[i]))
    }
  } else {
    keyNames.push(getKeyName(config, keys))
  }

  for (const key in global__store) {
    if (keyNames.indexOf(key) === -1) {
      new_global__store[key] = global__store[key]
    }
  }

  setItem(config.prefix, JSON.stringify(new_global__store), config.type)

}

export default removeStorage