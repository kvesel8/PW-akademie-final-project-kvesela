import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, APIRequestContext} from '@playwright/test'
import { BeUtils } from '../lib/beUtils'
import { TestConfigType } from '../types/fe/globalTypes'
import { RespBody } from '../types/be/respBodyType'

let resBodyBuffer: RespBody['bodyBuffer']
let resBody: RespBody['body']
let resBodyBufferToString

export class BooksSom extends BeUtils{
    protected _testConfig: TestConfigType

    constructor (
        request:APIRequestContext,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>,
        testConfig: TestConfigType
    ) {
        super(request, test)
        this._testConfig = testConfig
    }

    public async getListOfBooks() {
        await this._test.step('Get list of books', async() => {
            const res = await this._httpGet(`${this._testConfig.apiEndpoint}/v1/Books`)

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

    public async createBook(data:Object) {
        await this._test.step('Create a new book', async() => {
            await this._httpPost(`${this._testConfig.apiEndpoint}/v1/Books`, {data:data})
        })
    }

    public async getBookById(id: string | number) {
        await this._test.step('Get book by id', async() => {
            const res = await this._httpGet(`${this._testConfig.apiEndpoint}/v1/Books/${id.toString()}`)

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

    public async updateBookById(id: string | number, data: Object) {
        await this._test.step('Update book by id', async() => {
            await this._httpPost(`${this._testConfig.apiEndpoint}v1/Books/${id.toString()}`, {data:data})
        })
    }

    public async deleteBookById(id: string | number) {
        await this._test.step('Delete book by id', async() => {
            await this._httpDelete(`${this._testConfig.apiEndpoint}v1/Books/${id.toString()}`)
        })
    }
}