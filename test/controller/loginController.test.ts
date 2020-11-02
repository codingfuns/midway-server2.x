/*
 * @Description: file content
 * @Author: 
 * @Date: 2020-10-20 14:38:20
 * @LastEditors: wujing
 * @LastEditTime: 2020-10-22 16:28:41
 */
import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/web';
import * as assert from 'assert';

describe('test/controller/loginController.test.ts', () => {

  it('should POST /login', async () => {
    // create app
    const app = await createApp<Framework>();

    // make request
    const result = await createHttpRequest(app).post('/login/').send({username:'farmer1',password:'123456'})

    // use expect by jest
    expect(result.status).toBe(200);
    
    // or use assert
    assert.deepStrictEqual(result.status, 200);

    // close app
    await close(app);
  });
});
