/*
 * @Description: interface file
 * @Author: 
 * @Date: 2020-10-20 14:38:20
 * @LastEditors: Mr.WJ
 * @LastEditTime: 2021-05-22 17:18:53
 */
export interface IResponse{
  code:number,
  msg:string,
  result:Array<any> | Object
}
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
  set(key: string, value: any, time: number): Promise<any>
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

export interface IFileData{
  id ?: number
  type : string
  fileUrl: string
  title: string
  subTitle: string
  description: string
  subDescription: string
}
export interface IUpload{
  fileUrl: string
}
/**
 * @description upload-service function
 */
 export interface IUploadService{
  saveFileInfo(arg:IFileData):Promise<any>
}