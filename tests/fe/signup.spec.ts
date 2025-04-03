import { test } from '../fe/helpers/base'
import { UserType } from '../../src/types/fe/feDataTypes'
import { generateUsername, generatePassword } from '../../src/utils/randomValues'


const jsonData = JSON.parse(JSON.stringify(require("../../data/json/fe/userData.json")))
const user = jsonData as UserType

test.describe('Sign up tests', () =>{

    test.beforeEach('Initialization of poms and navigating to homepage',async({homePage}) => {
        await homePage.navigateToHomePage()
    })

    test('Sign up the new user', async ({homePage, signUp}) => {        
        const username = generateUsername()
        const password = generatePassword(5)

        await signUp.displaySignUpForm()
        await homePage.pageDialogOn()
        await signUp.fillUserName(username)
        await signUp.fillPassword(password)
        await signUp.clickSignUpButton()
        await homePage.pageDialogOff()
    })

    test('Sign up without username', async({homePage, signUp}) =>{       
        await signUp.displaySignUpForm()
        await homePage.pageDialogOn()
        await signUp.fillPassword(user.validUsername_validPassword.password)
        await signUp.clickSignUpButton()
        await homePage.pageDialogOff()
    })

    test('Sign up without password', async({homePage, signUp}) => {        
        await signUp.displaySignUpForm()
        await homePage.pageDialogOn()
        await signUp.fillUserName(user.validUsername_validPassword.username)
        await signUp.clickSignUpButton()
        await homePage.pageDialogOff()
    })

    test('Sign up without username and password', async({homePage, signUp}) => {
        await signUp.displaySignUpForm()
        await homePage.pageDialogOn()
        await signUp.clickSignUpButton()
        await homePage.pageDialogOff()
    })

    test('Sign up with existing user', async({homePage, signUp}) => {
        await signUp.displaySignUpForm()
        await homePage.pageDialogOn()
        await signUp.fillUserName(user.validUsername_validPassword.username)
        await signUp.fillPassword(user.validUsername_validPassword.password)
        await signUp.clickSignUpButton()
        await homePage.pageDialogOff()
    })
})