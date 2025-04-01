import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, APIRequestContext, APIResponse} from '@playwright/test'
import { BeUtils } from '../lib/beUtils';
import { RespBody } from '../../src/types/be/respBodyType'
import { TestConfigType } from '../../src/types/fe/globalTypes'

let resBodyBuffer: RespBody['bodyBuffer']
let resBody: RespBody['body']
let resBodyBufferToString

export class ActivitiesSom extends BeUtils{
    protected _testConfig: TestConfigType

    constructor (
        request:APIRequestContext,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>,
        testConfig: TestConfigType
    ) {
        super(request, test)
        this._testConfig = testConfig
    }

    public async getListOfActivities() {
        await this._test.step('Get list of activities', async() => {
           const getRes = await this._httpGet(`${this._testConfig.apiEndpoint}/v1/Activities`)

            resBodyBuffer = await getRes.body()
            resBodyBufferToString = resBodyBuffer.toString()

            if (resBodyBuffer && resBodyBufferToString.trim){
                try {
                    resBody = JSON.parse(resBodyBufferToString)
                } catch (error) {
                    console.error(resBodyBufferToString)
                }
            }
            console.log(resBody)
        })
    }

    public async createActivity(data:Object) {
        await this._test.step('Create a new activity', async() => {
            await this._httpPost(`${this._testConfig.apiEndpoint}/v1/Activities`, {data:data})
        })
    }

    public async getActivityById(id: string | number) {
        await this._test.step('Get activity by id', async() => {
            const res = await this._httpGet(`${this._testConfig.apiEndpoint}/v1/Activities/${id.toString}`)

            resBodyBuffer = await res.body()
            resBodyBufferToString = resBodyBuffer.toString()
            
            if(resBodyBuffer && resBodyBufferToString){
                try {
                    resBody = JSON.parse(resBodyBufferToString)
                } catch (error) {
                    console.error(resBodyBufferToString)
                }
            }            
        })
    }

    public async updateActivityById(id: string | number, data:Object) {
        await this._test.step('Update activity by id', async() => {
            await this._httpPut(`${this._testConfig.apiEndpoint}/v1/Activities/${id.toString}`, {data:data})
        })
    }

    public async deleteActivityById(id: string | number) {
        await this._test.step('Delete activity by id', async() => {
            await this._httpDelete(`${this._testConfig.apiEndpoint}/v1/Activities/${id.toString}`)
        })
    }
}