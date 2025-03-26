import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, APIRequest, APIResponse} from '@playwright/test'

export class AuthorsSom {

    protected _apiResponse: APIResponse
    protected _test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>

    constructor (
        apiResponse:APIResponse,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>
    ) {
        this._apiResponse = apiResponse
        this._test = test
    }
}