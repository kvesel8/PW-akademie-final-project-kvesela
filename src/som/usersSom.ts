import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, APIRequestContext, expect} from '@playwright/test'
import { RespBodyType } from '../../src/types/be/respBodyType'
import { BeUtils } from '../../src/lib/beUtils'
import { TestConfigType } from '../../src/types/fe/globalTypes'
import { Serializable } from 'node:child_process'

let resHeaders: RespBodyType['headers']
let resHeadersArray: RespBodyType['headersArray']
let resOk: RespBodyType['ok']
let resStatus: RespBodyType['status']
let resStatusText: RespBodyType['statusText']
let resUrl: RespBodyType['url']
let resJson: RespBodyType['json'] = Promise.resolve({})
let resText: RespBodyType['text']
let resBodyBuffer: RespBodyType['bodyBuffer']
let resBody: RespBodyType['body']
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
            const res = await this._httpGet(`${this._testConfig.apiEndpoint}/v1/Users`)  
            
            resBodyBuffer = await res.body()
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
            const res = await this._httpGet(`${this._testConfig.apiEndpoint}/v1/Users/${id.toString()}`)

            resBodyBuffer = await res.body()
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