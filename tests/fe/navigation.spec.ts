import { test } from './feHelpers/feBase'

test.describe('Navigation tests', ()=>{

    test.beforeEach('Navigating to homepage', async ({homePage}) => {
        await homePage.navigateToHomePage()
    })

    test('Navigate to contact form',async({contact})=>{
        await contact.displayContactForm()
        await contact.clickCloseButton()
    })

    test('Navigate to About us', async({aboutUs})=>{
        await aboutUs.displayAboutUs()
        await aboutUs.clickCloseButton()
    })

    test('Navigate to cart', async({cartOrder}) =>{
        await cartOrder.displayCart()
    })

    test('Navigate to login form', async({login}) =>{
        await login.displayLoginForm()
        await login.clickCloseButton()
    })

    test('Navigate to sign up form', async({signUp}) =>{
        await signUp.displaySignUpForm()
        await signUp.clickCloseButton()
    })

/*     test.only('Select a product category', async({homePage}) => {
        await homePage.displayCategory()
    })

    test('Display detail of an product', async({homePage}) => {
        await homePage.displayItemDetail()
    }) */ 
})

