import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, Page} from '@playwright/test'
import { aboutUsSel } from '../../data/selectors/feSel'
import { FeUtils } from '../lib/feUtils'

export class AboutUsPom extends FeUtils{
    
    constructor(
        page: Page,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>
    ) {
        super(page, test)
    }

    public async displayAboutUs(){
        await this._clickByRole('link', aboutUsSel.ABOUTUS_MODAL)
    }

    public async clickCloseButton(){
        await this._test.step('Click close button in about us modal', async() => {
            await this._page.locator('#videoModal').getByText(aboutUsSel.CLOSE_BUTTON, { exact: true }).click()
        })
    }
}