/*
 * @Description: file content
 * @Author: Mr.WJ
 * @Date: 2021-05-22 10:19:42
 * @LastEditors: Mr.WJ
 * @LastEditTime: 2021-05-22 17:09:31
 */

import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { IFileData, IUploadService } from '../interface';
import {FileModel} from '../model/fileModel';
import { Repository } from 'typeorm';

@Provide('uploadService')
export class UploadService implements IUploadService{

  @InjectEntityModel(FileModel)
  FileModel:Repository<FileModel>

  public async saveFileInfo(data:IFileData){
    try {
      let file = new FileModel();
      file.type = data.type;
      file.fileUrl = data.fileUrl;
      file.title = data.title;
      file.subTitle = data.subTitle;
      file.description = data.description;
      file.subDescription = data.subDescription;

      const result = await this.FileModel.save(file);
      return result.id;
    } catch (error) {
      console.log(error);
    }
  }
}
