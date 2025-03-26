import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, APIResponse} from '@playwright/test'

export class UsersSom {

    protected _apiResponse: APIResponse
    protected _test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>

    constructor (
        apiResponse:APIResponse,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>
    ) {
        this._apiResponse = apiResponse
        this._test = test
    }

    public async getListOfAllUsers(){

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