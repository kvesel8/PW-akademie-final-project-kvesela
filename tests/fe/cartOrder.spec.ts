import { test } from '../fe/helpers/base'
import { PlaceOrderFormType } from '../../src/types/fe/feDataTypes'


const jsonData = JSON.parse(JSON.stringify(require('../../data/json/placeOrderFromData.json')))
const placeOrderForm = jsonData as PlaceOrderFormType

test.describe('Cart tests and place order tests', () =>{

    test.beforeEach('Initialization of pom and navigate to homepage', async({homePage}) => {
        homePage.navigateToHomePage()
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

    test('Send filled place order formular without item in cart', async({cartOrder}) =>{
        await cartOrder.displayCart()
        await cartOrder.displayPlaceOrderForm()
        await cartOrder.fillName(placeOrderForm.name)
        await cartOrder.fillCreditCard(placeOrderForm.creditcard)
        await cartOrder.clickPurchaseButton()
    })

    test('Send filled place order formular with item in cart', async({homePage, cartOrder}) => {
        await homePage.displayItemDetail()
        await cartOrder.addItemToCart()
        await cartOrder.displayCart()
        await cartOrder.displayPlaceOrderForm()
        await cartOrder.fillName(placeOrderForm.name)
        await cartOrder.fillCreditCard(placeOrderForm.creditcard)
        await cartOrder.clickPurchaseButton()        
    })

    test('Send place order formular without name', async({homePage, cartOrder}) => {
        await homePage.displayItemDetail()
        await cartOrder.addItemToCart()
        await cartOrder.displayCart()
        await cartOrder.displayPlaceOrderForm()
        await cartOrder.fillCreditCard(placeOrderForm.creditcard)
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