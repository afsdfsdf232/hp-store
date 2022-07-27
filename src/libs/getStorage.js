/*
 * @Description: 
 * @Author: Author
 * @Date: 2022-06-20 11:02:02
 * @LastEditTime: 2022-07-27 16:56:38
 * @LastEditors: Author
 */
import getKeyName from './key'
import decrypt from './decrypt'
import removeStorage from './removeStorage'
import {
  getItem
} from './utils'

function getStorage(key, config, prefixHidden) {
  // prefixHidden 是否不添加前缀，默认为 false
  const currentTime = new Date().getTime() //当前时间戳，用于判断是否过期
  const storeData = getItem(config.prefix, config.type)
  const global__store = storeData ? JSON.parse(storeData) : null;
  const storeKey = prefixHidden ? key : getKeyName(config, key);
  if (!global__store || !global__store[storeKey]) return null;

  let defaultConf = {}
  // 配置项，加密，过期时间等
  const isCustom = typeof global__store[storeKey] === 'object' && global__store[storeKey].custom;
  if (isCustom) {
    defaultConf = decrypt(global__store[storeKey]._c)
  } else {
    defaultConf = config
  }

  // 获取数据
  const data = isCustom ? global__store[storeKey]._d : global__store[storeKey];

  const {
    expire,
    isEncrypt
  } = defaultConf

  // 判断是否过期
  if (expire === -1 || (expire > -1 && currentTime < expire)) {
    // 判断是否加密，加密数据需要解密
    return isEncrypt ? decrypt(data) : data;
  }
  // 过期
  removeStorage(key, config)
  return null
}

export default getStorage