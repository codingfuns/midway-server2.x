/*
 * @Description: user service used to operate user info
 * @Author: 
 * @Date: 2020-10-20 14:38:20
 * @LastEditors: wujing
 * @LastEditTime: 2020-10-23 17:24:41
 */
import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { IUserData, IUserService } from '../interface';
import { UserModel } from '../model/userModel';


@Provide('userService')
export class UserService implements IUserService {
  // //注入userModel 
  
  @InjectEntityModel(UserModel)
  userModel:Repository<UserModel>
  
  /**
   * @description save user info(create)
   * @param {IUserData} data userData
   */
  public async saveUser(data: IUserData){
    
    try {
      let user = new UserModel();
      user.name = data.name;
      user.nickname = data.nickname;
      user.password = data.password;
      user.phone = data.phone;
      user.age = data.age || 0;
      user.avatar = data.avatar || '';
      user.email = data.email;
      user.identity =data.identity || 0;

      const result = await this.userModel.save(user)
      return result.id
    } catch (error) {
      console.log(error)
    }
  }
  /**
   * @description query all user info
   */
  public async findAllUserInfo(){
    try {
      const result = await this.userModel.find();
      return result
    } catch (error) {
      
    }
  }
  /**
   * @description query user info by userId
   * @param {Number} id userId
   */
  public async findUserById(id: number){
    try {
      const result = await this.userModel.findOne({
        id: id
      })
      return result
    } catch (error) {
      
    }
  }
  /**
   * @description query user info by user name
   * @param {String} name user name
   */
  public async findUserByName(name: string){
    try {
      const result = await this.userModel.findOne({
        name: name
      })
      return result
    } catch (error) {
      
    }
  }
}
