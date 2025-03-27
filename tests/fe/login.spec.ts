import { test } from '@playwright/test'
import { HomePagePom } from '../../src/pom/homePagePom'
import { LoginPom } from '../../src/pom/loginPom'
import { User } from '../types/fe/userDataTypes'
import dotenv from 'dotenv'
import { testConfigType } from '../../src/types/fe/testConfigType'


dotenv.config({ override: true})

const env = process.env.ENV || 'dev'
const testConfig: testConfigType = require(`../../data/envs/config_${env}.json`)

const jsonData = JSON.parse(JSON.stringify(require('../data/user/userData.json')))
const user = jsonData as User


test.describe('Login tests', () => {

    test('Login with correct username and password', async({page}) => {
        const homePage = new HomePagePom(page, test, testConfig)
        const login = new LoginPom(page, test)
        
        await homePage.navigateToHomePage()
        await login.displayLoginForm()
        await login.fillUsername(user.validUsername_validPassword.username)
        await login.fillPassword(user.validUsername_validPassword.password)
        await login.clickLoginButton()
    })

    test('Login with invalid username and valid password', async({page}) => {
        const homePage = new HomePagePom(page, test, testConfig)
        const login = new LoginPom(page, test)

        await homePage.navigateToHomePage()
        await homePage.pageDialogOn()
        await login.displayLoginForm()
        await login.fillUsername(user.invalidUserName_validPassword.username)
        await login.fillPassword(user.invalidUserName_validPassword.password)
        await login.clickLoginButton()
        await homePage.pageDialogOff()
    })

    test('Login with invalid password and valid username', async({page}) => {
        const homePage = new HomePagePom(page, test, testConfig)
        const login = new LoginPom(page, test)
        
        await homePage.navigateToHomePage()
        await homePage.pageDialogOn()
        await login.displayLoginForm()
        await login.fillUsername(user.invalidPassword_valid_username.username)
        await login.fillPassword(user.invalidPassword_valid_username.password)
        await login.clickLoginButton()
        await homePage.pageDialogOff()

    })

    test('Login with no username and password', async({page}) => {
        const homePage = new HomePagePom(page, test, testConfig)
        const login = new LoginPom(page, test)

        await homePage.navigateToHomePage()
        await homePage.pageDialogOn()
        await login.displayLoginForm()
        await login.clickLoginButton()
        await homePage.pageDialogOff()
    })

})