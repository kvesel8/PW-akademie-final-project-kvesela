import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, Page, expect } from '@playwright/test'
import { cartOrderSel } from '../../data/selectors/cartOrderSel'

const url = 'https://www.demoblaze.com/cart.html#'

export class CartOrderPom {
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
            await this._page.locator(cartOrderSel.CART).first().click()
            await expect(this._page).toHaveURL(url)
        })
    }

    public async addItemToCart(){
        await this._test.step('Add item to cart', async() => {
            await this._page.getByText(cartOrderSel.ADDTOCART_BUTTON).first().click()
            await this._page.pause()
        })
    }

    public async deleteItemFromCart(){
        await this._test.step('Delete of an item from cart', async() => {
            await this._page.getByText(cartOrderSel.DELETE_BUTTON).first().click()
        })
    }

    public async displayPlaceOrderForm(){
        await this._test.step('Displazy place order form', async() => {
            await this._page.locator(cartOrderSel.PLACEORDER_BUTTON).first().click()
        })
    }

    public async fillName(name:string){
        await this._test.step('Fill name in place order form', async() => {
            await this._page.locator(cartOrderSel.NAME_FIELD).first().fill(name)
        })
    }

    public async fillCreditCard(card:number){
        await this._test.step('Fill credit card number in place order form', async() => {
            await this._page.locator(cartOrderSel.CREDITCARD_FIELD).first().fill(card.toString())
        })
    }

    public async clickPurchaseButton(){
        await this._test.step('Click the purchase button in place order form', async() => {
            await this._page.locator(cartOrderSel.PURCHASE_BUTTON).first().click()
        })
    }

    //pridat funkce na overeni zobrazeni spravne zpravy v modalnim okne prohlizece
}