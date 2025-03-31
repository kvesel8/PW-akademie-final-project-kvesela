import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, APIRequestContext, APIResponse} from '@playwright/test'
import { BeUtils } from '../lib/beUtils';

export class ActivitiesSom extends BeUtils{

    constructor (
        request:APIRequestContext,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>
    ) {
        super(request, test)
    }

    public async getListOfActivities() {
        await this._test.step('Get list of activities', async() => {

        })
    }

    public async createActivity() {
        await this._test.step('Create a new activity', async() => {
            
        })
    }

    public async getActivityById() {
        await this._test.step('Get activity by id', async() => {
            
        })
    }

    public async updateActivityById() {
        await this._test.step('Update activity by id', async() => {
            
        })
    }

    public async deleteActivityById() {
        await this._test.step('Delete activity by id', async() => {
            
        })
    }
}