/*
 * @Description: 
 * @Author: Author
 * @Date: 2022-06-20 11:03:13
 * @LastEditTime: 2022-06-21 09:49:49
 * @LastEditors: Author
 */
import setStorage from './setStorage'

import getStorage from './getStorage'

import clearStorage from './clearStorage'

import getAllStorage from './getAllStorage'

import removeStorage from './removeStorage'

/**
 * @description 本地存储
 * */
class Storeage {
  config = {
    prefix: 'global__store', // 前缀
    type: 'localStorage', // 目前仅支持 localStorage
    expire: -1, // 过期时间,结束时间的时间戳
    isEncrypt: false //是否加密
  }
  constructor(config) {
    this.config = Object.assign({}, this.config, config)
  }

  setStorage(key, data, config) {
    let mergeConfig = {
      ...this.config
    }
    if (config) {
      // 开启了自定义配置
      mergeConfig = Object.assign({}, this.config, config, {
        custom: true //检查是否存在该属性，用来判断获取配置位置
      })
    }
    return setStorage(key, data, mergeConfig)
  }

  getStorage(key) {
    return getStorage(key, this.config)
  }

  clearStorage() {
    return clearStorage(this.config)
  }

  getAllStorage() {
    return getAllStorage(this.config)
  }

  removeStorage(keys) { // keys 可以是单个字符串或者数组
    return removeStorage(keys, this.config)
  }

}


export {
  Storeage
}