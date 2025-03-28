import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, Page, expect } from '@playwright/test'
import { aboutUsSel } from '../../data/selectors/aboutUsSel'
import { FeUtils } from '../lib/feUtils'

export class AboutUsPom extends FeUtils{
    
    constructor(
        page: Page,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>
    ) {
        super(page, test)
    }

    public async displayAboutUs(){
        await this._test.step('Display About Us modal', async() => {
            await this._page.getByText(aboutUsSel.ABOUTUS_MODAL).first().click()
        })
    }

    public async clickCloseButton(){
        await this._test.step('Click close button in about us modal', async() => {
            await this._page.getByLabel(aboutUsSel.ABOUTUS_MODAL).getByText(aboutUsSel.CLOSE_BUTTON).click()
        })
    }
}