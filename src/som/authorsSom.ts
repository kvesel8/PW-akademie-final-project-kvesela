import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, APIResponse, APIRequestContext} from '@playwright/test'
import { TestConfigType } from '../../src/types/fe/globalTypes'
import { RespBodyType } from '../types/be/respBodyType'
import { BeUtils } from '../lib/beUtils';

let resBodyBuffer: RespBodyType['bodyBuffer']
let resBody: RespBodyType['body']
let resBodyBufferToString

export class AuthorsSom extends BeUtils{
    protected _testConfig: TestConfigType

    constructor (
        request:APIRequestContext,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>,
        testConfig: TestConfigType
    ) {
        super(request, test)
        this._testConfig = testConfig
    }

    public async getListOfAuthors() {
        await this._test.step('Get list of authors', async() => {
            const res = await this._httpGet(`${this._testConfig.apiEndpoint}/v1/Authors`)

            resBodyBuffer = await res.body()
            resBodyBufferToString = resBodyBuffer.toString()

            if (resBodyBuffer && resBodyBufferToString.trim()) {
                try {
                    resBody = JSON.parse(resBodyBufferToString)
                } catch (error) {
                    console.error(resBodyBufferToString)
                }
            }
            console.log(resBody)
        })
    }

    public async createAuthor(data:Object) {
        await this._test.step('Create new author', async() => {
            await this._httpPost(`${this._testConfig.apiEndpoint}/v1/Authors`,{data:data})
        })
    }

    public async getAuthorByBookId(id: string | number) {
        await this._test.step('Get author by book id', async() => {
            const res = await this._httpGet(`${this._testConfig.apiEndpoint}/v1/Authors/authors/books/${id.toString()}`)

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

    public async getAuthorById(id: string | number) {
        await this._test.step('Get author by id', async() => {
            const res = await this._httpGet(`${this._testConfig.apiEndpoint}/v1/Authors/${id.toString()}`)

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

    public async updateAuthorById(id: string | number, data:Object) {
        await this._test.step('Update author by id', async() => {
            await this._httpPut(`${this._testConfig.apiEndpoint}/v1/Authors/${id.toString()}`, {data:data})
        })
    }

    public async deleteAuthorById(id: string | number) {
        await this._test.step('Delete author by id', async() => {
            await this._httpDelete(`${this._testConfig.apiEndpoint}/v1/Authors/${id.toString()}`)
        })
    }
}