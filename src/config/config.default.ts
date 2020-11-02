/*
 * @Description: file content
 * @Author: 
 * @Date: 2020-10-20 14:38:20
 * @LastEditors: wujing
 * @LastEditTime: 2020-10-26 10:17:10
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  config.security = {
    csrf: {
      enable: false,
    },
  }
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_{{keys}}';

  // add your config here
  
  config.middleware = ["ResponseMiddware"];

  config.ResponseMiddware = {
    enable: false, // 是否开启该中间件，不写默认开启
    match: '/login', // 只匹配指定路由，反之如果只忽略指定路由，可以用ignore
    // ignore: ['/'] // 不要与match一起使用，避免冲突
  }
  
  //mysql 数据库配置
  config.orm = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'midway',
    synchronize: true,//同步创建表（根据model定义，会自动创建对应数据表）
    logging: false,
  }

  //jwt 秘钥
  config.jwtConfig = {
    secret: '123456',
  }
  //redis 配置
  config.redis = {
    client: {
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      password: '',
      db: 0,
    },
  }
  //redis 保存时间
  config.redisExpireTime = 24 * 60 * 60

  return config;
};
