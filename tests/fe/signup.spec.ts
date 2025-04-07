import { test } from './feHelpers/feBase'
import { UserType, PageDialogMessageType } from '../../src/types/fe/feDataTypes'
import { generateUsername, generatePassword } from '../../src/utils/randomValues'


const jsonUserData = JSON.parse(JSON.stringify(require("../../data/json/fe/userData.json")))
const user = jsonUserData as UserType

const jsonDialogMessage = JSON.parse(JSON.stringify(require('../../data/json/fe/pageDialogMessageData.json')))
const dialogMessage = jsonDialogMessage as PageDialogMessageType

test.describe('Sign up tests', () =>{

    test.beforeEach('Initialization of poms and navigating to homepage',async({homePage}) => {
        await homePage.navigateToHomePage()
    })

    test('Sign up the new user', async ({homePage, signUp}) => {        
        const username = generateUsername()
        const password = generatePassword(5)

        await signUp.displaySignUpForm()
        await signUp.fillUserName(username)
        await signUp.fillPassword(password)
        await signUp.clickSignUpButton()
        await signUp.checkSignUpDialogMessage(dialogMessage.signupMessage.success)
        await homePage.pageDialogOff()
    })

    test('Sign up without username', async({homePage, signUp}) =>{       
        await signUp.displaySignUpForm()
        await homePage.pageDialogOn()
        await signUp.fillPassword(user.validUsername_validPassword.password)
        await signUp.clickSignUpButton()
        await signUp.checkSignUpDialogMessage(dialogMessage.signupMessage.noUserNameOrPassword)
        await homePage.pageDialogOff()
    })

    test('Sign up without password', async({homePage, signUp}) => {        
        await signUp.displaySignUpForm()
        await homePage.pageDialogOn()
        await signUp.fillUserName(user.validUsername_validPassword.username)
        await signUp.clickSignUpButton()
        await signUp.checkSignUpDialogMessage(dialogMessage.signupMessage.noUserNameOrPassword)
        await homePage.pageDialogOff()
    })

    test('Sign up without username and password', async({homePage, signUp}) => {
        await signUp.displaySignUpForm()
        await homePage.pageDialogOn()
        await signUp.clickSignUpButton()
        await signUp.checkSignUpDialogMessage(dialogMessage.signupMessage.noUserNameOrPassword)
        await homePage.pageDialogOff()
    })

    test('Sign up with existing user', async({homePage, signUp}) => {
        await signUp.displaySignUpForm()
        await homePage.pageDialogOn()
        await signUp.fillUserName(user.validUsername_validPassword.username)
        await signUp.fillPassword(user.validUsername_validPassword.password)
        await signUp.clickSignUpButton()
        await signUp.checkSignUpDialogMessage(dialogMessage.signupMessage.userExists)
        await homePage.pageDialogOff()
    })
})