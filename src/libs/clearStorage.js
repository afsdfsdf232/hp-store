/*
 * @Description: 
 * @Author: Author
 * @Date: 2022-06-20 11:02:34
 * @LastEditTime: 2022-06-20 16:06:21
 * @LastEditors: Author
 */
function clearStorage(config) {
  window.localStorage.removeItem(config.prefix)
}

export default clearStorage