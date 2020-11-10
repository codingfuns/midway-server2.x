/*
 * @Description: provide redis service used to manage token info
 * @Author: 
 * @Date: 2020-10-21 10:55:25
 * @LastEditors: wujing
 * @LastEditTime: 2020-11-10 11:17:12
 */
import { Plugin, Provide } from "@midwayjs/decorator";
import { IRedis } from "../interface";

@Provide('redisService')
export class RedisService implements IRedis {
  @Plugin('redis')
  redis: any

  async set(key: string, value: any, seconds?: number) {
    const res: string = JSON.stringify(value)
    if (!seconds) {
      await this.redis.set(key, res)
    }
    else {
      // 设置有效时间
      await this.redis.set(key, res, 'EX', seconds)
    }
  }
  // 获取
  async get(key: string) {
    let data = await this.redis.get(key)
    if (!data) { return }
    data = JSON.parse(data)
    return data
  }

  // 清空redis
  async flushall() {
    this.redis.flushall()
    return
  }
}