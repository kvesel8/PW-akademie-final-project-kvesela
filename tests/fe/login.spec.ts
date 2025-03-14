import { test } from '@playwright/test'
import { HomePagePom } from '../src/pom/homePagePom'
import { LoginPom } from '../src/pom/loginPom'
import { User } from '../src/types/userDataType'

const jsonData = JSON.parse(JSON.stringify(require('../data/user/userData.json')))
const user = jsonData as User


test.describe('Login tests', () => {

    test('Display and close login form', async({page}) =>{
        const homePage = new HomePagePom(page, test)
        const login = new LoginPom(page, test)
        
        await homePage.navigateToHomePage()
        await login.displayLoginForm()
        await login.clickCloseButton()
    })

    test('Login with correct username and password', async({page}) => {
        const homePage = new HomePagePom(page, test)
        const login = new LoginPom(page, test)
        
        await homePage.navigateToHomePage()
        await login.displayLoginForm()
        await login.fillUsername(user.validUsername_validPassword.username)
        await login.fillPassword(user.validUsername_validPassword.password)
        await login.clickLoginButton()
    })

    test('Login with invalid username and valid password', async({page}) => {
        const homePage = new HomePagePom(page, test)
        const login = new LoginPom(page, test)

        await homePage.navigateToHomePage()
        await login.pageDialogOn()
        await login.displayLoginForm()
        await login.fillUsername(user.invalidUserName_validPassword.username)
        await login.fillPassword(user.invalidUserName_validPassword.password)
        await login.clickLoginButton()
        await login.pageDialogOff()
    })

    test('Login with invalid password and valid username', async({page}) => {
        const homePage = new HomePagePom(page, test)
        const login = new LoginPom(page, test)
        
        await homePage.navigateToHomePage()
        await login.pageDialogOn()
        await login.displayLoginForm()
        await login.fillUsername(user.invalidPassword_valid_username.username)
        await login.fillPassword(user.invalidPassword_valid_username.password)
        await login.clickLoginButton()
        await login.pageDialogOff()

    })

    test('Login with no username and password', async({page}) => {
        const homePage = new HomePagePom(page, test)
        const login = new LoginPom(page, test)

        await homePage.navigateToHomePage()
        await login.pageDialogOn()
        await login.displayLoginForm()
        await login.fillUsername("")
        await login.fillPassword("")
        await login.clickLoginButton()
        await login.pageDialogOff()
    })

})