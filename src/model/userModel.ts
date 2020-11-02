/*
 * @Description: data model(entities) which match the database,initialize the model class in service to operate database
 * @Author: wujing
 * @Date: 2020-10-20 17:17:44
 * @LastEditors: wujing
 * @LastEditTime: 2020-10-26 10:17:21
 */

import {EntityModel} from '@midwayjs/orm'
import {Column,PrimaryGeneratedColumn,UpdateDateColumn,CreateDateColumn} from 'typeorm'

@EntityModel('t_user')
 export class UserModel{
   
  @PrimaryGeneratedColumn()
  id : number

  @Column()
  name: string

  @Column()
  password: string

  @Column()
  email: string

  @Column()
  phone: number

  @Column()
  identity: number

  @Column()
  nickname: string

  @Column()
  age: number

  @Column()
  avatar: string

  @CreateDateColumn({type:'timestamp'})
  createTime: Date

  @UpdateDateColumn()
  updateTime: Date
 }
 