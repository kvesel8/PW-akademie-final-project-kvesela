import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, APIRequestContext, expect} from '@playwright/test'
import { RespBody } from '../../src/types/be/respBodyType'
import { BeUtils } from '../../src/lib/beUtils'
import { TestConfigType } from '../../src/types/fe/globalTypes'
import { Serializable } from 'node:child_process'

let resHeaders: RespBody['headers']
let resHeadersArray: RespBody['headersArray']
let resOk: RespBody['ok']
let resStatus: RespBody['status']
let resStatusText: RespBody['statusText']
let resUrl: RespBody['url']
let resJson: RespBody['json'] = Promise.resolve({})
let resText: RespBody['text']
let resBodyBuffer: RespBody['bodyBuffer']
let resBody: RespBody['body']
let resBodyBufferToString 

export class UsersSom extends BeUtils{
    protected _testConfig: TestConfigType

    constructor (
        request:APIRequestContext,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>,
        testConfig: TestConfigType
    ) {
        super( request, test)
        this._testConfig = testConfig
    }

    public async getListOfAllUsers(){
        await this._test.step('Get list of all users with', async() => {
            const getRes = await this._httpGet(`${this._testConfig.apiEndpoint}/v1/Users`)  
            
            resBodyBuffer = await getRes.body()
            resBodyBufferToString = resBodyBuffer.toString()

            if(resBodyBuffer && resBodyBufferToString.trim()){
                try {
                    resBody = JSON.parse(resBodyBufferToString)
                } catch (error) {
                    console.error(resBodyBufferToString);                    
                }
            } 
            console.log(resBody)            
        })
    }

    public async createUser(data:Object){
        await this._test.step('Create a new user', async() => {
            await this._httpPost(`${this._testConfig.apiEndpoint}/v1/Users`, {data:data})
        })
    }

    public async getUserById(id: string | number){
        await this._test.step('Get user by id', async() => {
            const getRes = await this._httpGet(`${this._testConfig.apiEndpoint}/v1/Users/${id.toString()}`)

            resBodyBuffer = await getRes.body()
            resBodyBufferToString = resBodyBuffer.toString()

            if(resBodyBuffer && resBodyBufferToString.trim()){
                try {
                    resBody = JSON.parse(resBodyBufferToString)
                } catch (error) {
                    console.error(resBodyBufferToString)
                }
            }
            console.log(resBody)
        })
    }

    public async updateUser(id: string | number, data: string | Buffer | Serializable ){
        await this._test.step("Update user by id", async() =>{
            const patchRes = await this._httpPut(`${this._testConfig.apiEndpoint}/v1/Users/${id.toString()}`, {data:data})
        })
    }

    public async deleteUser(id: string | number){
        await this._test.step('Delete user by id', async() => {
            const deleteRes = await this._httpDelete(`${this._testConfig.apiEndpoint}/v1/Users/${id.toString()}`)
        })
    }
}