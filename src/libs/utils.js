/*
 * @Description: 
 * @Author: Author
 * @Date: 2022-07-27 16:31:40
 * @LastEditTime: 2022-07-27 16:47:13
 * @LastEditors: Author
 */

/**
 * @description 判断浏览器是否支持该存储方式
 * */
function isCompatibility(type) {
  if (window[type]) return true;
  throw new Error(`该版本浏览器不支持${type}`)
}

/**
 * @description 存储持久化数据
 * */
export const setItem = (key, data, type) => {
  if (isCompatibility(type)) {
    if (type === 'localStorage') {
      return window.localStorage.setItem(key, data)
    } else if (type === 'sessionStorage') {
      return window.sessionStorage.setItem(key, data)
    }
  }
}

/**
 * @description 获取之前存储得数据
 * */
export const getItem = (key, type) => {
  if (isCompatibility(type)) {
    if (type === 'localStorage') {
      return window.localStorage.getItem(key)
    } else if (type === 'sessionStorage') {
      return window.sessionStorage.getItem(key)
    }
  }
}