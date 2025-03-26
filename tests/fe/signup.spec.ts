import { test } from '@playwright/test'
import { SignUpPom } from '../../src/pom/signUpPom'
import { HomePagePom } from '../../src/pom/homePagePom'
import { User } from '../types/fe/userDataTypes'
import { generateUsername, generatePassword } from '../../src/utils/randomValues'


const jsonData = JSON.parse(JSON.stringify(require("../../data/json/userData.json")))
const user = jsonData as User

test.describe('Sign up tests', () =>{

    test('Sign up the new user', async ({page}) => {
        const homePage = new HomePagePom(page, test)
        const signUp = new SignUpPom(page, test)
        const username = generateUsername()
        const password = generatePassword(5)

        await homePage.navigateToHomePage()
        await signUp.displaySignUpForm()
        await homePage.pageDialogOn()
        await signUp.fillUserName(username)
        await signUp.fillPassword(password)
        await signUp.clickSignUpButton()
        await homePage.pageDialogOff()
    })

    test('Sign up without username', async({page}) =>{
        const homePage = new HomePagePom(page, test)
        const signUp = new SignUpPom(page, test)

        await homePage.navigateToHomePage()
        await signUp.displaySignUpForm()
        await homePage.pageDialogOn()
        await signUp.fillPassword(user.validUsername_validPassword.password)
        await signUp.clickSignUpButton()
        await homePage.pageDialogOff()
    })

    test('Sign up without password', async({page}) => {
        const homePage = new HomePagePom(page, test)
        const signUp = new SignUpPom(page, test)

        await homePage.navigateToHomePage()
        await signUp.displaySignUpForm()
        await homePage.pageDialogOn()
        await signUp.fillUserName(user.validUsername_validPassword.username)
        await signUp.clickSignUpButton()
        await homePage.pageDialogOff()
    })

    test('Sign up without username and password', async({page}) => {
        const homePage = new HomePagePom(page, test)
        const signUp = new SignUpPom(page, test)

        await homePage.navigateToHomePage()
        await signUp.displaySignUpForm()
        await homePage.pageDialogOn()
        await signUp.clickSignUpButton()
        await homePage.pageDialogOff()
    })

    test('Sign up with existing user', async({page}) => {
        const homePage = new HomePagePom(page, test)
        const signUp = new SignUpPom(page, test)

        await homePage.navigateToHomePage()
        await signUp.displaySignUpForm()
        await homePage.pageDialogOn()
        await signUp.fillUserName(user.validUsername_validPassword.username)
        await signUp.fillPassword(user.validUsername_validPassword.password)
        await signUp.clickSignUpButton()
        await homePage.pageDialogOff()
    })
})