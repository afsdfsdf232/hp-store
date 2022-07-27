/*
 * @Description:  获取本地存储key name
 * @Author: Author
 * @Date: 2022-06-20 13:22:14
 * @LastEditTime: 2022-07-27 16:25:51
 * @LastEditors: Author
 */
export default function getKeyName(config, name) {
  const {
    prefix
  } = config
  return prefix + '_' + name
}