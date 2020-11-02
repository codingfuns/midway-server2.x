/*
 * @Description: app middleware
 * @Author: 
 * @Date: 2020-10-21 14:18:30
 * @LastEditors: wujing
 * @LastEditTime: 2020-10-22 15:40:59
 */
import { Inject, Provide } from '@midwayjs/decorator';
import { IWebMiddleware, IMidwayWebNext } from '@midwayjs/web';
import { Context } from 'egg';
import { IRedis } from '../interface';

/**
 * @description Authorize token middleware
 */
@Provide('AuthorizeToken')
export class AuthorizeToken implements IWebMiddleware {
  @Inject('redisService')
  redisService:IRedis

  resolve() {
    return async (ctx: Context, next: IMidwayWebNext) => {
      const {token} = ctx.request.header;
      if(token){
        const userName = await this.redisService.get(token);
        if (userName) {
          await next()
        }
        else {
          ctx.status = 400
          ctx.body = 'token无效！'
        }
      }else{
        ctx.status = 400
        ctx.body = 'token缺失！'
      }
    };
  }
}

/**
 * @description server response middleware
 */
@Provide('ResponseMiddware')
export class ResponseMiddware implements IWebMiddleware {
  resolve() {
    return async (ctx:Context, next) => {
      console.log('中间件01')
      await next()
      console.log('中间件02')
    }
  }
}