import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, APIResponse, APIRequestContext} from '@playwright/test'
import { RespBody } from '../../src/types/be/respBodyType'
import { BeUtils } from '../../src/lib/beUtils'
import { testConfigType } from '../../src/types/fe/globalTypes'

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
    protected _testConfig: testConfigType

    constructor (
        request:APIRequestContext,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>,
        testConfig: testConfigType
    ) {
        super( request, test)
        this._testConfig = testConfig
    }

    public async getListOfAllUsers(){
        await this._test.step('Get list of all users', async() => {
            const getRes = await this._httpGet(this._testConfig.apiEndpointUrl.users)      
            
        })
    }

    public async createUser(){
        await this._test.step('Create a new user', async() => {
            const postRes = await this._httpPost(this._testConfig.apiEndpointUrl.users)
        })
    }

    public async getUserById(id: string | number){
        await this._test.step('Get user by id', async() => {
            const getRes = await this._httpGet(`${this._testConfig.apiEndpointUrl.users}${id.toString()}`)
        })
    }

    public async updateUser(id: string | number){
        await this._test.step("Update user by id", async() =>{
            const patchRes = await this._httpPatch(`${this._testConfig.apiEndpointUrl.users}${id.toString()}`)
        })
    }

    public async deleteUser(id: string | number){
        await this._test.step('Delete user by id', async() => {
            const deleteRes = await this._httpDelete(`${this._testConfig.apiEndpointUrl.users}${id.toString()}`)
        })
    }
}