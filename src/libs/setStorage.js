/*
 * @Description: 存放数据
 * @Author: Author
 * @Date: 2022-06-20 11:01:50
 * @LastEditTime: 2022-07-27 16:54:48
 * @LastEditors: Author
 */
import getKeyName from './key'
import encrypt from './encrypt'
import {
  getItem,
  setItem
} from './utils'

function setStorage(key, data, config) {

  // 一个项目存储的数据都会放在一个Object中，方便管理
  let global__store = {

  }

  // 加密配置
  const _c = encrypt({
    expire: config.expire,
    isEncrypt: config.isEncrypt
  })

  // 获取 key
  const storeKey = getKeyName(config, key);

  // 判断之前是否存储过该项目数据，存在则往该项目中继续添加数据，继续存储
  const isGlobalKey = () => getItem(config.prefix, config.type)


  // 处理 data 是否需要加密，是否需要设置过期时间
  const storeData = {
    _d: data, //原始数据
    _c //配置
  }

  // 是否需要加密
  try {

    // 是否需要加密
    if (config.isEncrypt) storeData._d = encrypt(data);

    // 之前未存储，新数据
    if (!isGlobalKey()) {
      // custom 是否存在自定义配置
      global__store[storeKey] = config.custom ? storeData : storeData._d
    } else {
      // 有全局store，在原来数据对象上继续追加

      // 解析之前的数据
      global__store = JSON.parse(isGlobalKey());

      // 追加在新的对象中
      global__store[storeKey] = config.custom ? storeData : storeData._d
    }
  } catch (err) {
    throw new Error(err)
  }

  // 存储数据
  setItem(config.prefix, JSON.stringify(global__store), config.type)
}

export default setStorage