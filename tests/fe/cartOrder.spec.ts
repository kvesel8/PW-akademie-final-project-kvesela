import { test } from '@playwright/test'
import { HomePagePom } from '../../src/pom/homePagePom'
import { CartOrderPom } from '../../src/pom/cartOrderPom'
import { placeOrderFormType } from '../../src/types/fe/placeOrderFormTypes'
import dotenv from 'dotenv'
import { TestConfigType } from '../../src/types/fe/globalTypes'


dotenv.config({ override: true})

const env = process.env.ENV || 'dev'
const testConfig: TestConfigType = require(`../../data/envs/config_${env}.json`)

const jsonData = JSON.parse(JSON.stringify(require('../../data/json/placeOrderFromData.json')))
const placeOrderForm = jsonData as placeOrderFormType

test.describe('Cart tests and place order tests', () =>{

    let homePage
    let cartOrder

    test.beforeEach('Initialization of pom and navigate to homepage', async({page}) => {
        homePage = new HomePagePom(page, test, testConfig)
        cartOrder = new CartOrderPom(page, test)
        
        homePage.navigateToHomePage()
    })

    test.only('Add item in cart',{tag:'@add_to_cart'}, async({}) => {
        await homePage.displayItemDetail()
        await cartOrder.addItemToCart()
    })

    test('Delete item from cart', async({}) =>{
        await homePage.displayItemDetail()
        await cartOrder.addItemToCart()
        await cartOrder.displayCart()
        await cartOrder.deleteItemFromCart()
    })

    test('Send filled place order formular without item in cart', async({}) =>{
        await cartOrder.displayCart()
        await cartOrder.displayPlaceOrderForm()
        await cartOrder.fillName(placeOrderForm.name)
        await cartOrder.fillCreditCard(placeOrderForm.creditcard)
        await cartOrder.clickPurchaseButton()
    })

    test('Send filled place order formular with item in cart', async({}) => {
        await homePage.displayItemDetail()
        await cartOrder.addItemToCart()
        await cartOrder.displayCart()
        await cartOrder.displayPlaceOrderForm()
        await cartOrder.fillName(placeOrderForm.name)
        await cartOrder.fillCreditCard(placeOrderForm.creditcard)
        await cartOrder.clickPurchaseButton()        
    })

    test('Send place order formular without name', async({}) => {
        await homePage.displayItemDetail()
        await cartOrder.addItemToCart()
        await cartOrder.displayCart()
        await cartOrder.displayPlaceOrderForm()
        await cartOrder.fillCreditCard(placeOrderForm.creditcard)
        await cartOrder.clickPurchaseButton()    
    })

    test('Send place order formular without credit card', async({}) =>{
        await homePage.displayItemDetail()
        await cartOrder.addItemToCart()
        await cartOrder.displayCart()
        await cartOrder.displayPlaceOrderForm()
        await cartOrder.fillName(placeOrderForm.name)
        await cartOrder.clickPurchaseButton() 
    })

    test('Send place order formular without name and credit card', async({}) =>{
        await homePage.displayItemDetail()
        await cartOrder.addItemToCart()
        await cartOrder.displayCart()
        await cartOrder.displayPlaceOrderForm()
        await cartOrder.clickPurchaseButton() 
    })
})