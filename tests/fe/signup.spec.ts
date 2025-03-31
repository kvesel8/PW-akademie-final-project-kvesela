import { test } from '@playwright/test'
import { SignUpPom } from '../../src/pom/signUpPom'
import { HomePagePom } from '../../src/pom/homePagePom'
import { User } from '../../src/types/fe/userDataTypes'
import { generateUsername, generatePassword } from '../../src/utils/randomValues'
import dotenv from 'dotenv'
import { TestConfigType, TestSecretsType } from "../../src/types/fe/globalTypes";


dotenv.config({ override: true})

const env = process.env.ENV || 'dev'
const testConfig: TestConfigType = require(`../../data/envs/config_${env}.json`)

const testSecrets: TestSecretsType = {
    username: process.env.UNAME,
    password: process.env.PWORD
}

const jsonData = JSON.parse(JSON.stringify(require("../../data/json/userData.json")))
const user = jsonData as User

test.describe('Sign up tests', () =>{
    let homePage
    let signUp 

    test.beforeEach('Initialization of poms and navigating to homepage',async({ page }) => {
        homePage  = new HomePagePom(page, test, testConfig)
        signUp = new SignUpPom(page, test, testSecrets)

        await homePage.navigateToHomePage()
    })

    test('Sign up the new user', async ({}) => {        
        const username = generateUsername()
        const password = generatePassword(5)

        await signUp.displaySignUpForm()
        await homePage.pageDialogOn()
        await signUp.fillUserName(username)
        await signUp.fillPassword(password)
        await signUp.clickSignUpButton()
        await homePage.pageDialogOff()
    })

    test('Sign up without username', async({}) =>{       
        await signUp.displaySignUpForm()
        await homePage.pageDialogOn()
        await signUp.fillPassword(user.validUsername_validPassword.password)
        await signUp.clickSignUpButton()
        await homePage.pageDialogOff()
    })

    test('Sign up without password', async({}) => {        
        await signUp.displaySignUpForm()
        await homePage.pageDialogOn()
        await signUp.fillUserName(user.validUsername_validPassword.username)
        await signUp.clickSignUpButton()
        await homePage.pageDialogOff()
    })

    test('Sign up without username and password', async({}) => {
        await signUp.displaySignUpForm()
        await homePage.pageDialogOn()
        await signUp.clickSignUpButton()
        await homePage.pageDialogOff()
    })

    test('Sign up with existing user', async({}) => {
        await signUp.displaySignUpForm()
        await homePage.pageDialogOn()
        await signUp.fillUserName(user.validUsername_validPassword.username)
        await signUp.fillPassword(user.validUsername_validPassword.password)
        await signUp.clickSignUpButton()
        await homePage.pageDialogOff()
    })
})