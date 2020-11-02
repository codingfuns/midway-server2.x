/*
 * @Description: 切面方法
                before 方法调用前执行 常会在 before 的过程中修改入参、校验，以符合程序执行的逻辑
                around 包裹方法的前后执行,是比较全能的方法，它可以包裹整个方法调用流程
                afterReturn 正确返回内容时执行, 方法会多一个返回结果参数，如果只需要修改返回结果，可以直接使用它
                afterThrow 抛出异常时执行,用于拦截错误,它不能在流程中返回结果，一般用来记录错误日志
                after 用来做最后的处理，不管是成功或者失败，都可以用它执行一些事情，比如记录所有日志
                try {
                    // before  
                    // around or invokeMethod
                    // afterReturn
                } catch(err){
                    // afterThrow
                } finally {
                    // after
                }
 * @Author: 
 * @Date: 2020-10-23 10:06:01
 * @LastEditors: wujing
 * @LastEditTime: 2020-10-23 10:44:37
 */
import { Aspect, IMethodAspect, JoinPoint, Provide } from "@midwayjs/decorator";
import { LoginController } from "../controller/loginController";

@Provide()
@Aspect(LoginController)
export class LoginAspect implements IMethodAspect {
  
  async before(point: JoinPoint) {
    console.log('beforeRouterRun')
  }

  // async around(point: JoinPoint) {
  //   // const result = await point.proceed(...point.args);  // 执行原方法
  //   // return result + ' world';
  //   console.log('around')
  // }
  // async afterReturn(point: JoinPoint, result) {
  //   // return result + ' world';
  //   console.log('after the router response')
  // }

  // async afterThrow(point: JoinPoint, error) {
  //   if(/not found/.test(error.message)) {
  //     throw new Error('another error');
  //   } else {
  //     console.error('got custom error');
  //   }
  // }
  
  // async after(point: JoinPoint, result, error) {
  //   if(error) {
  //     console.error(error);
  //   } else {
  //     console.log('response result');
  //   }
  // }
}