<!--
 * @Description: file content
 * @Author: 
 * @Date: 2020-10-23 14:22:40
 * @LastEditors: wujing
 * @LastEditTime: 2020-11-13 14:27:14
-->
|-- Midway-server
    |-- .editorconfig
    |-- .eslintrc.json
    |-- .gitignore
    |-- .prettierrc.js
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- README.zh-CN.md
    |-- tsconfig.json
    |-- logs //日志文件
    |   |-- my_midway_project
    |       |-- common-error.log
    |       |-- egg-schedule.log
    |       |-- midway-agent.log
    |       |-- midway-core.log
    |       |-- midway-web.log
    |-- run //运行时文件
    |   |-- agent_config.json
    |   |-- agent_config_meta.json
    |   |-- agent_timing_7856.json
    |   |-- application_config.json
    |   |-- application_config_meta.json
    |   |-- application_timing_7856.json
    |   |-- router.json
    |-- src  //源码
    |   |-- configuration.ts  //启动文件--生命周期
    |   |-- interface.ts  //全局数据接口定义
    |   |-- aspect  // 切面
    |   |   |-- index.ts
    |   |-- config    //配置
    |   |   |-- config.default.ts
    |   |   |-- config.local.ts
    |   |   |-- config.unittest.ts
    |   |   |-- plugin.ts
    |   |-- controller   //控制器
    |   |   |-- loginController.ts
    |   |   |-- userController.ts
    |   |-- middleware  //中间件
    |   |   |-- index.ts
    |   |-- model  //数据模型
    |   |   |-- userModel.ts
    |   |-- schedule  //定时任务
    |   |-- service  //服务
    |   |   |-- redisService.ts
    |   |   |-- userService.ts
    |   |-- util  //工具类
    |-- test
    |   |-- controller  //测试
    |       |-- loginController.test.ts
    |-- typings    //类型定义
        |-- app
        |   |-- index.d.ts
        |-- config
            |-- index.d.ts
            |-- plugin.d.ts
