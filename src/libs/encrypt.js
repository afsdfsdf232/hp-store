/*
 * @Description: 加密
 * @Author: Author
 * @Date: 2022-06-20 11:36:04
 * @LastEditTime: 2022-06-21 09:47:13
 * @LastEditors: Author
 */
import CryptoJS from 'crypto-js'
import {
  SECRET_KEY,
  SECRET_IV
} from './config.js'

function encrypt(data) {
  if (typeof data === "object") {
    try {
      data = JSON.stringify(data);
    } catch (error) {
      throw new Error('参数错误')
    }
  }
  const dataHex = CryptoJS.enc.Utf8.parse(data);
  const encrypted = CryptoJS.AES.encrypt(dataHex, SECRET_KEY, {
    iv: SECRET_IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.ciphertext.toString();
}

export default encrypt