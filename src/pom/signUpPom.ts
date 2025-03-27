import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, Page } from "@playwright/test";
import { signUpSel } from "../../data/selectors/signUpSel";
import { testSecretsType } from '../../src/types/fe/globalTypes'

export class SignUpPom {
    protected _page: Page
    protected _test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>
    protected _testSecrets: testSecretsType

    constructor(
        page: Page,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>,
        testSecrets: testSecretsType
    ) {
        this._page = page
        this._test = test
        this._testSecrets = testSecrets
    }

    public async displaySignUpForm(){
        await this._test.step('Navigate to Sign up', async() => {
            await this._page.locator(signUpSel.SIGNUP_FORM).first().click()
        })
    }

    public async fillUserName( username: string){
        await this._test.step('Fill username in signup form', async() => {
            await this._page.locator(signUpSel.USERNAME_FIELD).first().fill(username)
        })
    }

    public async fillPassword( password: string){
        await this._test.step('Fill password in signup form', async() => {
            await this._page.locator(signUpSel.PASSWORD_FIELD).first().fill(password)
        })
    }

    public async clickSignUpButton(){
        await this._test.step('Click on signup button', async() => {
            await this._page.getByText(signUpSel.SIGNUP_BUTTON).first().click()
        })
    }

    public async clickCloseButton(){
        await this._test.step('Click close button to close signup modal', async() => {
            await this._page.getByLabel(signUpSel.SIGNUP_BUTTON).getByText(signUpSel.CLOSE_BUTTON).click()
        })
    }
    
    //pridat funkce na overeni zobrazeni spravne zpravy v modalnim okne prohlizece
}