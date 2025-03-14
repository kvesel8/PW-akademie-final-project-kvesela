import { test } from '@playwright/test'
import { SignUpPom } from '../../src/pom/signUpPom'
import { HomePagePom } from '../../src/pom/homePagePom'
import { User } from '../types/userDataTypes'


const jsonData = JSON.parse(JSON.stringify(require("../data/user/userData.json")))
const user = jsonData as User

test.describe('Sign up tests', () =>{

    //tady by to chtelo generovat vzdy noveho uzivatele
    test('Sign up the new user', async ({page}) => {
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