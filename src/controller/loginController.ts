/*
 * @Description: file content
 * @Author: 
 * @Date: 2020-10-21 10:49:29
 * @LastEditors: wujing
 * @LastEditTime: 2020-11-10 11:41:08
 */
import {ALL, Config, Controller, Inject, Plugin, Post, Provide} from '@midwayjs/decorator'
import { Context } from 'egg';
import { ILoignData, IRedis, IUserData, IUserService } from '../interface';
import * as bcrypt from 'bcrypt';

@Provide()
@Controller('/login')
export class LoginController{
  
  @Inject('userService')
  userService:IUserService
  
  @Inject('redisService')
  redisService:IRedis

  @Plugin('jwt')
  jwt

  @Config(ALL)
  config

  /**
   * @description login request path
   * @param ctx context
   */
  @Post('/')
  public async userLogin(ctx:Context){
    const loginReqData:ILoignData = ctx.request.body;
    const userInfo:IUserData = await this.userService.findUserByName(loginReqData.username);
    if(userInfo){
      const isMatch = await bcrypt.compare(loginReqData.password, userInfo.password);
      if(isMatch){
        const token = this.jwt.sign(loginReqData.username, this.config.jwtConfig.secret);
        this.redisService.set(token, userInfo, this.config.redisExpireTime);
        ctx.status = 200
        ctx.body = {
          data: '登录成功！',
          userInfo:userInfo,
          token,
        }
      }else {
        ctx.status = 400
        ctx.body = '密码错误！'
      }
    }else{
      ctx.status = 400
      ctx.body = '用户不存在！'
    }
  }
}
