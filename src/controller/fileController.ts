/*
 * @Description: file content
 * @Author: Mr.WJ
 * @Date: 2021-05-22 10:19:11
 * @LastEditors: Mr.WJ
 * @LastEditTime: 2021-05-22 17:29:39
 */
import { ALL, Config, Inject, Controller, Post, Provide } from "@midwayjs/decorator";
import { Context } from "egg";
import { IFileData, IUpload } from "../interface";
import { UploadService } from "../service/uploadService";

//异步二进制 写入流
const awaitReadStream = require('await-stream-ready').write;
//管道读入一个虫洞。
const sendToWormhole = require('stream-wormhole');
const path = require('path');
const fs = require('fs');
const md5 = require('md5');



@Provide()
@Controller('/file')
export class FileController {
  @Inject('uploadService')
  uploadService: UploadService

  @Config(ALL)
  config

  @Post('/upload')
  public async uploadFile(ctx: Context) {
    //多图上传
    let parts = ctx.multipart({});
    let stream;
    let files = [];
    while ((stream = await parts()) != null) {
      if (!stream.filename) {
        break;
      }
      //获取stream
      // const stream = await ctx.getFileStream();
      // 生成文件名
      const filename = md5(stream.filename) + path.extname(stream.filename).toLocaleLowerCase();

      const target = path.join(this.config.baseDir, 'app/public/upload/', filename);

      //生成一个文件写入 文件流
      const writeStream = fs.createWriteStream(target);
      try {
        // 写入文件
        await awaitReadStream(stream.pipe(writeStream));
      } catch (err) {
        // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
        await sendToWormhole(stream);
        throw err;
      }
      const fileInfo: IUpload = { fileUrl: '/public/upload/' + filename}
      files.push(fileInfo)
    }
    ctx.body = {
      status:200,
      msg:'上传成功',
      result:files
    }
  }

  @Post('/save')
  public async saveFileInfo(ctx: Context) {
    const fileInfo:IFileData = ctx.request.body;
    const res = await this.uploadService.saveFileInfo(fileInfo);
    if(res){
      ctx.body = {
        code:200,
        msg:'保存成功',
      }
    }
  }
}