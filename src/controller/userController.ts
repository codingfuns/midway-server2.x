/*
 * @Description: file content
 * @Author: 
 * @Date: 2020-10-21 14:10:04
 * @LastEditors: wujing
 * @LastEditTime: 2020-10-23 09:52:45
 */
import { Controller, Get, Inject, Post, Provide } from "@midwayjs/decorator";
import { Context } from "egg";
import { IRedis, IUserData, IUserService } from "../interface";
import * as bcrypt from 'bcrypt'
const SALT_WORK_FACTOR = 10 // 定义加密密码计算强度,从1级到10级，强度越高，密码越复杂，计算时间也越长。

@Provide()
@Controller('/user')
export class UserController{

  @Inject('userService')
  userService:IUserService
  @Inject('redisService')
  redisService:IRedis

  /**
   * @description user regist
   * @param ctx contex
   */
  @Post('/register')
  public async userRegister(ctx: Context){
    const userInfo: IUserData = ctx.request.body;
    if (userInfo.name && userInfo.password && userInfo.email && userInfo.phone && userInfo.nickname) {
      const user = await this.userService.findUserByName(userInfo.name)
      if (user) {
        ctx.status = 400
        ctx.body = '用户名已被占用！'
      }
      else {
        const salt: string = await bcrypt.genSalt(SALT_WORK_FACTOR)
        const encrypted: string = await bcrypt.hash(userInfo.password, salt)
        userInfo.password = encrypted
        const res = await this.userService.saveUser(userInfo)
        if (res) {
          ctx.status = 200
          ctx.body = '创建成功！'
        }
      }
    }
    else {
      ctx.status = 400
      ctx.body = '参数错误！'
    }
  }

  /**
   * @description query user info by name (need authorize the token)
   * @param ctx contex
   */
  @Get('/getUserInfo',{ middleware: ['AuthorizeToken'] })
  public async getUserInfo(ctx: Context){
    // const userId:number = ctx.body.userId
    const {token} = ctx.request.header;
    const userName = await this.redisService.get(token);
    const res:IUserData[] = await this.userService.findUserByName(userName);
    ctx.body = res
  }
}