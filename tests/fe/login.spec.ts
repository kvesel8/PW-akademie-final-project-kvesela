import { test } from '@playwright/test'
import { HomePagePom } from '../../src/pom/homePagePom'
import { LoginPom } from '../../src/pom/loginPom'
import { UserType } from '../../src/types/fe/feDataTypes'
import dotenv from 'dotenv'
import { TestConfigType, TestSecretsType } from '../../src/types/fe/globalTypes'


dotenv.config({ override: true})

const env = process.env.ENV || 'dev'
const testConfig: TestConfigType = require(`../../data/envs/config_${env}.json`)

const jsonData = JSON.parse(JSON.stringify(require('../data/user/userData.json')))
const user = jsonData as UserType

const testSecrets: TestSecretsType = {
    username: process.env.UNAME,
    password: process.env.PWORD
}

test.describe('Login tests', () => {
    let homePage
    let login

    test.beforeEach('Initialization of poms and navigate to homepage', async ({page}) => {
        homePage = new HomePagePom(page, test, testConfig)
        login = new LoginPom(page, test, testSecrets)

        homePage.navigateToHomePage()
    })

    test('Login with correct username and password', async({}) => {
        await login.displayLoginForm()
        await login.fillUsername(user.validUsername_validPassword.username)
        await login.fillPassword(user.validUsername_validPassword.password)
        await login.clickLoginButton()
    })

    test('Login with invalid username and valid password', async({}) => {
        await homePage.pageDialogOn()
        await login.displayLoginForm()
        await login.fillUsername(user.invalidUserName_validPassword.username)
        await login.fillPassword(user.invalidUserName_validPassword.password)
        await login.clickLoginButton()
        await homePage.pageDialogOff()
    })

    test('Login with invalid password and valid username', async({}) => {
        await homePage.pageDialogOn()
        await login.displayLoginForm()
        await login.fillUsername(user.invalidPassword_valid_username.username)
        await login.fillPassword(user.invalidPassword_valid_username.password)
        await login.clickLoginButton()
        await homePage.pageDialogOff()
    })

    test('Login with no username and password', async({}) => {
        await homePage.pageDialogOn()
        await login.displayLoginForm()
        await login.clickLoginButton()
        await homePage.pageDialogOff()
    })

})