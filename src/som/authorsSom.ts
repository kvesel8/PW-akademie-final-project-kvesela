import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, APIResponse, APIRequestContext} from '@playwright/test'
import { BeUtils } from '../lib/beUtils';

export class AuthorsSom extends BeUtils{

    constructor (
        request:APIRequestContext,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>
    ) {
        super(request, test)
    }

    public async getListOfAuthors() {
        await this._test.step('Get list of authors', async() => {

        })
    }

    public async createAuthor() {
        await this._test.step('Create new author', async() => {
            
        })
    }

    public async getAuthorByBookId() {
        await this._test.step('Get author by book id', async() => {
            
        })
    }

    public async getAuthorById() {
        await this._test.step('Get author by id', async() => {
            
        })
    }

    public async updateAuthorById() {
        await this._test.step('Update author by id', async() => {
            
        })
    }

    public async deleteAuthorById() {
        await this._test.step('Delete author by id', async() => {
            
        })
    }
}