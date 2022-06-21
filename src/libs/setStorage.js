/*
 * @Description: 存放数据
 * @Author: Author
 * @Date: 2022-06-20 11:01:50
 * @LastEditTime: 2022-06-21 09:50:17
 * @LastEditors: Author
 */
import getKeyName from './key'
import encrypt from './encrypt'

function setStorage(key, data, config) {

  let global__store = {

  }
  const _c = encrypt({
    expire: config.expire,
    isEncrypt: config.isEncrypt
  })
  // 获取 key
  const storeKey = getKeyName(config, key);
  const isGlobalKey = () => window.localStorage.getItem(config.prefix);
  if (!window.localStorage) throw new Error('该环境不支持 LocalStorage');
  // 处理 data 是否需要加密，是否需要设置过期时间
  const storeData = {
    _d: data, //原始数据
    _c //配置
  }

  // 是否需要加密
  try {
    if (config.isEncrypt) storeData._d = encrypt(data);
    if (!isGlobalKey()) {
      global__store[storeKey] = config.custom ? storeData : storeData._d
    } else {
      // 有全局store
      global__store = JSON.parse(isGlobalKey());
      global__store[storeKey] = config.custom ? storeData : storeData._d
    }
  } catch (err) {
    throw new Error(err)
  }
  window.localStorage.setItem(config.prefix, JSON.stringify(global__store))
}

export default setStorage