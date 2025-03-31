import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, APIResponse, APIRequestContext} from '@playwright/test'
import { BeUtils } from '../lib/beUtils'

export class BooksSom extends BeUtils{

    constructor (
        request:APIRequestContext,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>
    ) {
        super(request, test)
    }

    public async getListOfBooks() {
        await this._test.step('Get list of books', async() => {

        })
    }

    public async createBook() {
        await this._test.step('Create a new book', async() => {
            
        })
    }

    public async getBookById() {
        await this._test.step('Get book by id', async() => {
            
        })
    }

    public async updateBookById() {
        await this._test.step('Update book by id', async() => {
            
        })
    }

    public async deleteBookById() {
        await this._test.step('Delete book by id', async() => {
            
        })
    }
}