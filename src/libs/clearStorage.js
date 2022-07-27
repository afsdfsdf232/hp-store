/*
 * @Description: 
 * @Author: Author
 * @Date: 2022-06-20 11:02:34
 * @LastEditTime: 2022-07-27 17:00:29
 * @LastEditors: Author
 */
function clearStorage(config) {
  window[config.type].removeItem(config.prefix)
}

export default clearStorage