import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, APIResponse, APIRequestContext, expect} from '@playwright/test'
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
        await this._test.step('Get list of all users', async() => {
            const getRes = await this._httpGet(`${this._testConfig.apiEndpoint}/v1/Users`)  
            
            const resBody = await getRes.json()
            expect(resBody.id).toBe(10)
        })
    }

    public async createUser(data:Object){
        await this._test.step('Create a new user', async() => {
            const postRes = await this._httpPost(`${this._testConfig.apiEndpoint}/v1/Users`, {data:data})
        })
    }

    public async getUserById(id: string | number){
        await this._test.step('Get user by id', async() => {
            const getRes = await this._httpGet(`${this._testConfig.apiEndpoint}/v1/Users/${id.toString()}`)
        })
    }

    public async updateUser(id: string | number, data: string | Buffer | Serializable ){
        await this._test.step("Update user by id", async() =>{
            const patchRes = await this._httpPatch(`${this._testConfig.apiEndpoint}/v1/Users/${id.toString()}`, {data:data})
        })
    }

    public async deleteUser(id: string | number){
        await this._test.step('Delete user by id', async() => {
            const deleteRes = await this._httpDelete(`${this._testConfig.apiEndpoint}/v1/Users/${id.toString()}`)
        })
    }
}