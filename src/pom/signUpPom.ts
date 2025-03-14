import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, Page } from "@playwright/test";
import { signUpSel } from "../../data/selectors/signUpSel";

export class SignUpPom {
    protected _page: Page
    protected _test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>

    constructor(
        page: Page,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>
    ) {
        this._page = page
        this._test = test
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

    public async pageDialogOn(){
        await this._test.step('Start to listen to page dialog', async() => {
            this._page.on('dialog', async(dialog) =>{
                console.log(dialog.message())
                await dialog.accept()
            })
        })
    }

    public async pageDialogOff(){
        await this._test.step('Stop to listen to page dialog', async() => {
            this._page.off('dialog', async() => {
                console.log('Dialog closed')
            })
        })
    }
    
}