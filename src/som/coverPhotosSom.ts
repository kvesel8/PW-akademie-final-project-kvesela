import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, APIRequestContext, APIResponse} from '@playwright/test'
import { BeUtils } from '../../src/lib/beUtils'
export class CoverPhotosSom extends BeUtils {

    constructor (
        request: APIRequestContext,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>
    ) {
       super(request, test)
    }

    public async getListOfCoverPhotos() {
        await this._test.step('Get list of cover photos', async() => {

        })
    }

    public async createCoverPhoto() {
        await this._test.step('Create new cover photo', async() => {
            
        })
    }

    public async getCoverPhotoByBookId() {
        await this._test.step('Get cover photo by book id', async() => {
            
        })
    }

    public async getCoverPhotoByCoverId() {
        await this._test.step('Get cover photo by cover photo id', async() => {
            
        })
    }

    public async updateCoverPhotoById() {
        await this._test.step('Update cover photo by cover photo id', async() => {
            
        })
    }

    public async deleteCoverPhotoById() {
        await this._test.step('Delete cover photo by cover photo id', async() => {
            
        })
    }
}