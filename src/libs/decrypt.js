/*
 * @Description: 解密
 * @Author: Author
 * @Date: 2022-06-20 11:39:24
 * @LastEditTime: 2022-06-21 09:49:19
 * @LastEditors: Author
 */
import CryptoJS from 'crypto-js'
import {
  SECRET_KEY,
  SECRET_IV
} from './config'

function decrypt(data) {
  const encryptedHexStr = CryptoJS.enc.Hex.parse(data);
  const str = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  const decrypt = CryptoJS.AES.decrypt(str, SECRET_KEY, {
    iv: SECRET_IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  const result = decryptedStr.toString()
  const reg = /\{.*?\}/g
  if (reg.test(result)) {
    return JSON.parse(result)
  }
  return result;
}

export default decrypt