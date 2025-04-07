import { test } from './feHelpers/feBase'
import { PlaceOrderFormType } from '../../src/types/fe/feDataTypes'


const jsonData = JSON.parse(JSON.stringify(require('../../data/json/fe/placeOrderFormData.json')))
const placeOrderForm = jsonData as PlaceOrderFormType

test.describe('Cart tests and place order tests', () =>{

    test.beforeEach('Navigate to homepage', async({homePage}) => {
        await homePage.navigateToHomePage()
    })

    test('Add item in cart',{tag:'@add_to_cart'}, async({homePage, cartOrder}) => {
        await homePage.displayItemDetail()
        await cartOrder.addItemToCart()
    })

    test('Delete item from cart', async({homePage, cartOrder}) =>{
        await homePage.displayItemDetail()
        await cartOrder.addItemToCart()
        await cartOrder.displayCart()
        await cartOrder.deleteItemFromCart()
    })

    test.only('Send filled place order formular without item in cart', async({cartOrder}) =>{
        await cartOrder.displayCart()
        await cartOrder.displayPlaceOrderForm()
        await cartOrder.fillName(placeOrderForm.name)
        await cartOrder.fillCreditCard(placeOrderForm.creditCard)
        await cartOrder.clickPurchaseButton()
    })

    test('Send filled place order formular with item in cart', async({homePage, cartOrder}) => {
        await homePage.displayItemDetail()
        await cartOrder.addItemToCart()
        await cartOrder.displayCart()
        await cartOrder.displayPlaceOrderForm()
        await cartOrder.fillName(placeOrderForm.name)
        await cartOrder.fillCreditCard(placeOrderForm.creditCard)
        await cartOrder.clickPurchaseButton()        
    })

    test('Send place order formular without name', async({homePage, cartOrder}) => {
        await homePage.displayItemDetail()
        await cartOrder.addItemToCart()
        await cartOrder.displayCart()
        await cartOrder.displayPlaceOrderForm()
        await cartOrder.fillCreditCard(placeOrderForm.creditCard)
        await cartOrder.clickPurchaseButton()    
    })

    test('Send place order formular without credit card', async({homePage, cartOrder}) =>{
        await homePage.displayItemDetail()
        await cartOrder.addItemToCart()
        await cartOrder.displayCart()
        await cartOrder.displayPlaceOrderForm()
        await cartOrder.fillName(placeOrderForm.name)
        await cartOrder.clickPurchaseButton() 
    })

    test('Send place order formular without name and credit card', async({homePage, cartOrder}) =>{
        await homePage.displayItemDetail()
        await cartOrder.addItemToCart()
        await cartOrder.displayCart()
        await cartOrder.displayPlaceOrderForm()
        await cartOrder.clickPurchaseButton() 
    })
})