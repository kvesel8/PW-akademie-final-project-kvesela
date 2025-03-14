import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, Page, expect } from '@playwright/test'
import { cartSel } from '../../data/selectors/cartSel'

const url = 'https://www.demoblaze.com/cart.html#'

export class CartPom {
    protected _page: Page
    protected _test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>

    constructor(
        page: Page,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>
    ) {
        this._page = page
        this._test = test
    }

    public async displayCart(){
        await this._test.step('Display cart', async() => {
            await this._page.locator(cartSel.CART).first().click()
            await expect(this._page).toHaveURL(url)
        })
    }
}