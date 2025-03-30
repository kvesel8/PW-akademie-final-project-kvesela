import { test } from '@playwright/test'
import { HomePagePom } from '../../src/pom/homePagePom'
import { ContactPom } from '../../src/pom/contactPom'
import { AboutUsPom } from '../../src/pom/aboutUsPom'
import { CartOrderPom } from '../../src/pom/cartOrderPom'
import { LoginPom } from '../../src/pom/loginPom'
import { SignUpPom } from '../../src/pom/signUpPom'
import dotenv from 'dotenv'
import { testConfigType, testSecretsType } from '../../src/types/fe/globalTypes'


dotenv.config({ override: true})

const env = process.env.ENV || 'dev'
const testConfig: testConfigType = require(`../../data/envs/config_${env}.json`)

const testSecrets: testSecretsType = {
    username: process.env.UNAME,
    password: process.env.PWORD
}

test.describe('Navigation tests', ()=>{

    let homePage
    let signUp
    let login
    let cart
    let aboutUs
    let contact

    test.beforeEach('Initialization of poms and navigating to homepage', async ({page}) => {
        homePage  = new HomePagePom(page, test, testConfig)
        signUp = new SignUpPom(page, test, testSecrets)
        login = new LoginPom(page, test, testSecrets)
        cart = new CartOrderPom(page, test)
        aboutUs = new AboutUsPom(page, test)
        contact = new ContactPom(page, test)

        await homePage.navigateToHomePage()
    })

    test('Navigate to contact form',async({})=>{
        await contact.displayContactForm()
        await contact.clickCloseButton()
    })

    test('Navigate to About us', async({})=>{
        await aboutUs.displayAboutUs()
        await aboutUs.clickCloseButton()
    })

    test('Navigate to cart', async({}) =>{
        await cart.displayCart()
    })

    test('Navigate to login form', async({}) =>{
        await login.displayLoginForm()
        await login.clickCloseButton()
    })

    test('Navigate to sign up form', async({}) =>{
        await signUp.displaySignUpForm()
        await signUp.clickCloseButton()
    })

    test('Select a product category', async({}) => {
        await homePage.displayCategory()
    })

    test('Display detail of an product', async({}) => {
        await homePage.displayItemDetail()
    })
})

