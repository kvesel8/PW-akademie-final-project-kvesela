import { test } from '@playwright/test'
import { SignUpPom } from '../../src/pom/signUpPom'
import { HomePagePom } from '../../src/pom/homePagePom'
import { LoginPom } from '../../src/pom/loginPom'
import { User } from '../types/userDataTypes'


const jsonData = JSON.parse(JSON.stringify(require("../data/user/userData.json")))
const user = jsonData as User

test.describe('Sign up tests', () =>{

    test('Sign up the user', async ({page}) => {
        const homePage = new HomePagePom(page, test)
        const signUp = new SignUpPom(page, test)

        await homePage.navigateToHomePage()
        await signUp.displaySignUpForm()
        await signUp.fillUserName(user.validUsername_validPassword.username)
        await signUp.fillPassword(user.validUsername_validPassword.password)
        await signUp.clickSignUpButton()
    })

    test('Sign up without username', async({page}) =>{
        const homePage = new HomePagePom(page, test)
        const signUp = new SignUpPom(page, test)
        const login = new LoginPom(page, test)

        await homePage.navigateToHomePage()
        await signUp.displaySignUpForm()
        await login.pageDialogOn()
        await signUp.fillPassword(user.validUsername_validPassword.password)
        await signUp.clickSignUpButton()
        await login.pageDialogOff()
    })

    test('Sign up without password', async({page}) => {
        const homePage = new HomePagePom(page, test)
        const signUp = new SignUpPom(page, test)
        const login = new LoginPom(page, test)

        await homePage.navigateToHomePage()
        await signUp.displaySignUpForm()
        await login.pageDialogOn()
        await signUp.fillUserName(user.validUsername_validPassword.username)
        await signUp.clickSignUpButton()
        await login.pageDialogOff()
    })

    test('Sign up without username and password', async({page}) => {
        const homePage = new HomePagePom(page, test)
        const signUp = new SignUpPom(page, test)
        const login = new LoginPom(page, test)

        await homePage.navigateToHomePage()
        await signUp.displaySignUpForm()
        await login.pageDialogOn()
        await signUp.clickSignUpButton()
        await login.pageDialogOff()
    })
})