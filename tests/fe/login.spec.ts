import { test } from './feHelpers/base'
import { UserType } from '../../src/types/fe/feDataTypes'


const jsonData = JSON.parse(JSON.stringify(require('../../data/json/fe/userData.json')))
const user = jsonData as UserType

test.describe('Login tests', () => {

    test.beforeEach('Initialization of poms and navigate to homepage', async ({homePage}) => {
        homePage.navigateToHomePage()
    })

    test('Login with correct username and password', async({login}) => {
        await login.displayLoginForm()
        await login.fillUsername(user.validUsername_validPassword.username)
        await login.fillPassword(user.validUsername_validPassword.password)
        await login.clickLoginButton()
    })

    test('Login with invalid username and valid password', async({login, homePage}) => {
        await homePage.pageDialogOn()
        await login.displayLoginForm()
        await login.fillUsername(user.invalidUserName_validPassword.username)
        await login.fillPassword(user.invalidUserName_validPassword.password)
        await login.clickLoginButton()
        await homePage.pageDialogOff()
    })

    test('Login with invalid password and valid username', async({login, homePage}) => {
        await homePage.pageDialogOn()
        await login.displayLoginForm()
        await login.fillUsername(user.invalidPassword_valid_username.username)
        await login.fillPassword(user.invalidPassword_valid_username.password)
        await login.clickLoginButton()
        await homePage.pageDialogOff()
    })

    test('Login with no username and password', async({login, homePage}) => {
        await homePage.pageDialogOn()
        await login.displayLoginForm()
        await login.clickLoginButton()
        await homePage.pageDialogOff()
    })

})