import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, APIRequestContext, APIResponse} from '@playwright/test'
import { TestConfigType } from '../types/fe/globalTypes'
import { RespBodyType } from '../types/be/respBodyType'
import { BeUtils } from '../../src/lib/beUtils'

let resBodyBuffer: RespBodyType['bodyBuffer']
let resBody:RespBodyType['body']
let resBodyBufferToString
export class CoverPhotosSom extends BeUtils {
    protected _testConfig: TestConfigType
    constructor (
        request: APIRequestContext,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>,
        testConfig: TestConfigType
    ) {
       super(request, test)
       this._testConfig = testConfig
    }

    public async getListOfCoverPhotos() {
        await this._test.step('Get list of cover photos', async() => {
            const res = await this._httpGet(`${this._testConfig.apiEndpoint}/v1/CoverPhotos`)

            resBodyBuffer = await res.body()
            resBodyBufferToString = resBodyBuffer.toString()

            if(resBodyBuffer && resBodyBufferToString.trim()) {
                try {
                    resBody = JSON.parse(resBodyBufferToString)
                } catch (error) {
                    console.error(resBodyBufferToString)
                }
            }
            console.log(resBody)
        })
    }

    public async createCoverPhoto(data:Object) {
        await this._test.step('Create new cover photo', async() => {
            await this._httpPost(`${this._testConfig.apiEndpoint}/v1/CoverPhotos`, {data:data})
        })
    }

    public async getCoverPhotoByBookId(id: string | number) {
        await this._test.step('Get cover photo by book id', async() => {
            const res = await this._httpGet(`${this._testConfig.apiEndpoint}/v1/CoverPhotos/books/covers/${id.toString()}`)

            resBodyBuffer = await res.body()
            resBodyBufferToString = resBodyBuffer.toString()

            if(resBodyBuffer && resBodyBufferToString.trim){
                try {
                    resBody = JSON.parse(resBodyBufferToString)
                } catch (error) {
                    console.error(resBodyBufferToString)
                }
            }
            console.log(resBody)
        })
    }

    public async getCoverPhotoByCoverId(id: string | number) {
        await this._test.step('Get cover photo by cover photo id', async() => {
            const res = await this._httpGet(`${this._testConfig.apiEndpoint}/v1/CoverPhotos/${id.toString()}`)

            resBodyBuffer = await res.body()
            resBodyBufferToString = resBodyBuffer.toString()

            if(resBodyBuffer && resBodyBufferToString.trim){
                try {
                    resBody = JSON.parse(resBodyBufferToString)
                } catch (error) {
                    console.error(resBodyBufferToString)
                }
            }
            console.log(resBody)
        })
    }

    public async updateCoverPhotoById(id: string | number, data:Object) {
        await this._test.step('Update cover photo by cover photo id', async() => {
            await this._httpPut(`${this._testConfig.apiEndpoint}/v1/CoverPhotos/${id.toString()}`, {data:data})
        })
    }

    public async deleteCoverPhotoById(id: string | number) {
        await this._test.step('Delete cover photo by cover photo id', async() => {
            await this._httpDelete(`${this._testConfig.apiEndpoint}/v1/CoverPhotos/${id.toString()}`)
        })
    }
}