/*
 * @Description: start app file which include lifeCircle
 * @Author: 
 * @Date: 2020-10-20 16:03:53
 * @LastEditors: wujing
 * @LastEditTime: 2020-10-22 15:44:54
 */
import { App, Configuration} from '@midwayjs/decorator';
import {ILifeCycle, IMidwayContainer} from '@midwayjs/core'
import { Application } from 'egg';

@Configuration({
    importConfigs: [
      './config/' // 自动加载 config 目录下所有 配置文件
    ],
    imports: ['@midwayjs/orm']})
export class ContainerConfiguration implements ILifeCycle{

  @App()
  app:Application

  async onReady(container:IMidwayContainer):Promise<void>{
    
  }
}