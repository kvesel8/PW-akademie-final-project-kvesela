import { test } from '@playwright/test'
import { HomePagePom } from '../../src/pom/homePagePom'
import { ContactPom } from '../../src/pom/contactPom'
import { AboutUsPom } from '../../src/pom/aboutUsPom'
import { CartOrderPom } from '../../src/pom/cartOrderPom'
import { LoginPom } from '../../src/pom/loginPom'
import { SignUpPom } from '../../src/pom/signUpPom'



test.describe('Navigation tests', ()=>{

    test('Navigate to contact form',async({page})=>{
        const homePage = new HomePagePom(page,test)
        const contact = new ContactPom(page,test)

        await homePage.navigateToHomePage()
        await contact.displayContactForm()
        await contact.clickCloseButton()
    })

    test('Navigate to About us', async({page})=>{
        const homePage = new HomePagePom(page,test)
        const aboutUs = new AboutUsPom(page, test)

        await homePage.navigateToHomePage()
        await aboutUs.displayAboutUs()
        await aboutUs.clickCloseButton()
    })

    test('Navigate to cart', async({page}) =>{
        const homePage = new HomePagePom(page,test)
        const cart = new CartOrderPom(page,test)

        await homePage.navigateToHomePage()
        await cart.displayCart()
    })

    test('Navigate to login form', async({page}) =>{
        const homePage = new HomePagePom(page, test)
        const login = new LoginPom(page,test)

        await homePage.navigateToHomePage()
        await login.displayLoginForm()
        await login.clickCloseButton()
    })

    test('Navigate to sign up form', async({page}) =>{
        const homePage = new HomePagePom(page, test)
        const signUp = new SignUpPom(page,test)
        
        await homePage.navigateToHomePage()
        await signUp.displaySignUpForm()
        await signUp.clickCloseButton()
    })

    test('Select a product category', async({page}) => {
        const homePage = new HomePagePom(page, test)

        await homePage.navigateToHomePage()
        await homePage.displayCategory()
    })

    test('Display detail of an product', async({page}) => {
        const homePage = new HomePagePom(page, test)

        await homePage.navigateToHomePage()
        await homePage.displayItemDetail()
    })
})

