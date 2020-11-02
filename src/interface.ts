/*
 * @Description: interface file
 * @Author: 
 * @Date: 2020-10-20 14:38:20
 * @LastEditors: wujing
 * @LastEditTime: 2020-10-22 15:45:16
 */
/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: number;
}
/**
 * @description redis service 
 */
export interface IRedis{
  set(key: string, value: string, time: number): Promise<any>
  get(key: string): Promise<any>
}

/**
 * @description user login data
 */
export interface ILoignData{
  username:string
  password:string
}

/**
 * @description user base info
 */
export interface IUserData{
  id?:number
  name: string
  nickname: string
  password?: string
  email: string
  phone: number
  identity?: number
  age?: number
  avatar?: string
  date?:Date
}
/**
 * @description user response info
 */
export interface IUserResponse{
  data:IUserData
}

/**
 * @description user-service function
 */
export interface IUserService{
  saveUser(arg: IUserData): Promise<any>
  findAllUserInfo(): Promise<any>
  findUserById(arg: number): Promise<any>
  findUserByName(arg: string): Promise<any>
}