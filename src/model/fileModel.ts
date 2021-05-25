/*
 * @Description: data model(entities) which match the database,initialize the model class in service to operate database
 * @Author: wujing
 * @Date: 2020-10-20 17:17:44
 * @LastEditors: Mr.WJ
 * @LastEditTime: 2021-05-22 10:28:37
 */

import {EntityModel} from '@midwayjs/orm'
import {Column,PrimaryGeneratedColumn,UpdateDateColumn,CreateDateColumn} from 'typeorm'

@EntityModel('t_file_info')
 export class FileModel{
   
  @PrimaryGeneratedColumn()
  id : number

  @Column()
  type: string

  @Column()
  fileUrl: string

  @Column()
  title: string

  @Column()
  subTitle: string

  @Column()
  description: string

  @Column()
  subDescription: string

  @CreateDateColumn({type:'timestamp'})
  createTime: Date

  @UpdateDateColumn()
  updateTime: Date
 }