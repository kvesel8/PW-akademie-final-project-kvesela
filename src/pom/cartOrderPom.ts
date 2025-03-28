import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, Page, expect } from '@playwright/test'
import { cartOrderSel } from '../../data/selectors/cartOrderSel'
import { FeUtils } from '../lib/feUtils'

const url = 'https://www.demoblaze.com/cart.html#'

export class CartOrderPom extends FeUtils{
   
    constructor(
        page: Page,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>
    ) {
        super(page, test)
    }

    public async displayCart(){
        await this._test.step('Display cart', async() => {
            await this._clickBySelector(cartOrderSel.CART)
            await expect(this._page).toHaveURL(url)
        })
    }

    public async addItemToCart(){
        await this._test.step('Add item to cart', async() => {
            await this._page.getByText(cartOrderSel.ADDTOCART_BUTTON).first().click()
        })
    }

    public async deleteItemFromCart(){
        await this._test.step('Delete of an item from cart', async() => {
            await this._page.getByText(cartOrderSel.DELETE_BUTTON).first().click()
        })
    }

    public async displayPlaceOrderForm(){
        await this._test.step('Displazy place order form', async() => {
            await this._clickBySelector(cartOrderSel.PLACEORDER_BUTTON)
        })
    }

    public async fillName(name:string){
        await this._test.step('Fill name in place order form', async() => {
            await this._fillBySelector(cartOrderSel.NAME_FIELD, name)
        })
    }

    public async fillCreditCard(card:number){
        await this._test.step('Fill credit card number in place order form', async() => {
            await this._fillBySelector(cartOrderSel.CREDITCARD_FIELD, card)
        })
    }

    public async clickPurchaseButton(){
        await this._test.step('Click the purchase button in place order form', async() => {
            await this._clickBySelector(cartOrderSel.PURCHASE_BUTTON)
        })
    }

    //pridat funkce na overeni zobrazeni spravne zpravy v modalnim okne prohlizece
}