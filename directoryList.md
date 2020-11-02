<!--
 * @Description: file content
 * @Author: 
 * @Date: 2020-10-23 14:22:40
 * @LastEditors: wujing
 * @LastEditTime: 2020-10-23 14:30:47
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
    |-- logs
    |   |-- my_midway_project
    |       |-- common-error.log
    |       |-- egg-schedule.log
    |       |-- midway-agent.log
    |       |-- midway-core.log
    |       |-- midway-web.log
    |-- run
    |   |-- agent_config.json
    |   |-- agent_config_meta.json
    |   |-- agent_timing_7856.json
    |   |-- application_config.json
    |   |-- application_config_meta.json
    |   |-- application_timing_7856.json
    |   |-- router.json
    |-- src
    |   |-- configuration.ts
    |   |-- interface.ts
    |   |-- aspect
    |   |   |-- index.ts
    |   |-- config
    |   |   |-- config.default.ts
    |   |   |-- config.local.ts
    |   |   |-- config.unittest.ts
    |   |   |-- plugin.ts
    |   |-- controller
    |   |   |-- loginController.ts
    |   |   |-- userController.ts
    |   |-- middleware
    |   |   |-- index.ts
    |   |-- model
    |   |   |-- userModel.ts
    |   |-- schedule
    |   |-- service
    |   |   |-- redisService.ts
    |   |   |-- userService.ts
    |   |-- util
    |-- test
    |   |-- controller
    |       |-- loginController.test.ts
    |-- typings
        |-- app
        |   |-- index.d.ts
        |-- config
            |-- index.d.ts
            |-- plugin.d.ts
