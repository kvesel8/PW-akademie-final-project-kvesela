import { test } from '@playwright/test'
import { HomePagePom } from '../../src/pom/homePagePom'
import { CartOrderPom } from '../../src/pom/cartOrderPom'


test.describe('Cart tests and place order tests', () =>{

    test('Add item in cart',{tag:'@add_to_cart'}, async({page}) => {
        const homePage = new HomePagePom(page,test)
        const cartOrder = new CartOrderPom(page,test)

        await homePage.navigateToHomePage()
        await homePage.displayItemDetail()
        await cartOrder.addItemToCart()
    })

    test('Delete item from cart', async({page}) =>{
        const homePage = new HomePagePom(page,test)
        const cartOrder = new CartOrderPom(page,test)
    })

    test('Send filled place order formular without item in cart', async({page}) =>{
        const homePage = new HomePagePom(page,test)
        const cartOrder = new CartOrderPom(page,test)
    })

    test('Send filled place order formular with item in cart', async({page}) => {
        const homePage = new HomePagePom(page,test)
        const cartOrder = new CartOrderPom(page,test)
    })

    test('Send place order formular without name', async({page}) => {
        const homePage = new HomePagePom(page,test)
        const cartOrder = new CartOrderPom(page,test)
    })

    test('Send place order formular without credit card', async({page}) =>{
        const homePage = new HomePagePom(page,test)
        const cartOrder = new CartOrderPom(page,test)
    })

    test('Send place order formular without name and credit card', async({page}) =>{
        const homePage = new HomePagePom(page,test)
        const cartOrder = new CartOrderPom(page,test)
    })


})