import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, APIResponse, APIRequest, APIRequestContext} from '@playwright/test'
import { RespBody } from '../../src/types/be/respBodyType'

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

export class UsersSom {

    protected _request: APIRequestContext
    protected _test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>

    constructor (
        apiRequestContext:APIRequestContext,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>
    ) {
        this._request = apiRequestContext
        this._test = test
    }

    public async getListOfAllUsers(){
        await this._test.step('Get list of all users', async() => {
            const getRes = await this._request.get('https://fakerestapi.azurewebsites.net//api/v1/Users')
            
        })
    }

    public async createUser(){

    }

    public async getUserById(){

    }

    public async updateUser(){

    }

    public async deleteUser(){
        
    }
}