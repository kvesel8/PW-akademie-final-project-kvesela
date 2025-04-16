import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, APIRequestContext} from '@playwright/test'
import { RespBodyType } from '../../src/types/be/respBodyType'
import { BeUtils } from '../../src/lib/beUtils'
import { TestConfigType } from '../../src/types/fe/globalTypes'
import { Serializable } from 'node:child_process'


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
    }

    public async createUser(data:Object){
        await this._httpPost(`${this._testConfig.apiEndpoint}/v1/Users`, {data:data})
    }

    public async getUserById(id: string | number){
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
    }

    public async updateUser(id: string | number, data: string | Buffer | Serializable ){
        await this._httpPut(`${this._testConfig.apiEndpoint}/v1/Users/${id.toString()}`, {data:data})
        
    }

    public async deleteUser(id: string | number){        
        await this._httpDelete(`${this._testConfig.apiEndpoint}/v1/Users/${id.toString()}`)
    }
}