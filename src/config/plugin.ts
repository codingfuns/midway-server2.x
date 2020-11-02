/*
 * @Description: file content
 * @Author: 
 * @Date: 2020-10-20 14:38:20
 * @LastEditors: wujing
 * @LastEditTime: 2020-10-22 13:52:25
 */
// import { EggPlugin } from 'egg';
// export default {
//   static: false, // default is true
// } as EggPlugin;

export const jwt = {
  enable: true,
  package: 'egg-jwt',
}
export const redis = {
  enable: true,
  package: 'egg-redis',
}