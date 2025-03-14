import { test } from '@playwright/test'
import { SignUpPom } from '../src/pom/signUpPom'
import { HomePagePom } from '../src/pom/homePagePom'
import { User } from '../src/types/userDataType'

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
})