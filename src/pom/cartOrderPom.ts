import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, Page, expect } from '@playwright/test'
import { cartOrderSel } from '../../data/selectors/feSel'
import { FeUtils } from '../lib/feUtils'

const url = 'https://www.demoblaze.com/cart.html'

export class CartOrderPom extends FeUtils{
   
    constructor(
        page: Page,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>
    ) {
        super(page, test)
    }

    public async displayCart(){
        await this._clickByRole('link',cartOrderSel.CART)
        await expect(this._page).toHaveURL(url)
    }

    public async addItemToCart(){
        await this._clickByText(cartOrderSel.ADDTOCART_BUTTON)
    }

    public async deleteItemFromCart(){
        await this._clickByText(cartOrderSel.DELETE_BUTTON)
    }

    public async displayPlaceOrderForm(){
        await this._clickBySelector(cartOrderSel.PLACEORDER_BUTTON)
    }

    public async fillName(name:string){
        await this._fillBySelector(cartOrderSel.NAME_FIELD, name)
    }

    public async fillCreditCard(card: string | number){
        await this._fillBySelector(cartOrderSel.CREDITCARD_FIELD, card)
    }

    public async clickPurchaseButton(){
        await this._clickByRole('button', cartOrderSel.PURCHASE_BUTTON)
    }

    //pridat funkce na overeni zobrazeni spravne zpravy v modalnim okne prohlizece
}