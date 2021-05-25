/*
 * @Description: file content
 * @Author: 
 * @Date: 2020-10-20 14:38:20
 * @LastEditors: Mr.WJ
 * @LastEditTime: 2021-05-22 15:03:49
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
exports.static = true;