/*
 * @Description: 
 * @Author: Author
 * @Date: 2022-06-20 11:24:05
 * @LastEditTime: 2022-06-21 09:29:47
 * @LastEditors: Author
 */
import CryptoJS from 'crypto-js'
// 十六位十六进制数作为密钥
export const SECRET_KEY = CryptoJS.enc.Utf8.parse("d3413e23-5601-42c6-9c48-180a5d05c1ca");

// 十六位十六进制数作为密钥偏移量
export const SECRET_IV = CryptoJS.enc.Utf8.parse("5279c485-47ec-4787-a2b1-46a7c4b4185b");