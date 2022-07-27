<!--
 * @Description: hp-store
 * @Author: Author
 * @Date: 2022-07-27 17:14:24
 * @LastEditTime: 2022-07-27 17:28:25
 * @LastEditors: Author
-->
## 用于本地存储的插件，支持浏览器localStorage 和 sessionStorage API

## 使用方式
  1. import Storeage from 'hp-store'
  2. const store = new Storeage(config：Config)
  Config: 配置项
    ①：prefix: 'global__store' 前缀
    ②：type: localStorage || sessionStorage
    ③：expire: -1 过期时间,结束时间的时间戳
    ④：isEncrypt: Boolean   是否加密，默认 true

## Api
  1. store.setStorage(key,data,config) key: string, data: any, config：Config(可选)
  2. store.getStorage(key) key：String
  3. store.getAllStorage()
  4. store.removeStorage(keys)  keys: String || Array  支持单个 key 值，或者一个带key的数组
  5. store.clearStorage() 清除该存储数据