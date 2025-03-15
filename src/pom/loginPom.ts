import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, Page, expect } from '@playwright/test'
import { loginSel } from '../../data/selectors/loginSel'


export class LoginPom {
    protected _page: Page
    protected _test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>
    protected _url: string

    constructor (
        page:Page,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>
    ) {
        this._page = page
        this._test = test
    }

    public async displayLoginForm(){
        await this._test.step('Display of login form', async () => {
            await this._page.locator(loginSel.LOGIN_FORM).first().click()
        })
    }

    public async fillUsername( username: string){
        await this._test.step('Fill username in login form', async () =>{
            await this._page.locator(loginSel.USERNAME_FIELD).first().fill(username)
        })
    }

    public async fillPassword(password: string){
        await this._test.step('Fill user password', async () => {
            await this._page.locator(loginSel.PASSWORD_FIELD).first().fill(password)
        })
    }

    public async clickLoginButton(){
        await this._test.step('Click login button', async () => {
            await this._page.getByText(loginSel.LOGIN_BUTTON).first().click()
        })
    }

    public async clickCloseButton(){
        await this._test.step('Click close button to close login modal', async () => {
            await this._page.getByLabel(loginSel.LOGIN_BUTTON).getByText(loginSel.CLOSE_BUTTON).click()
        })
    }

    public async logOut(){
        await this._test.step('Log out user', async() => {
            await expect(this._page.locator(loginSel.LOGOUT)).toBeVisible()
            await this._page.locator(loginSel.LOGOUT).click()
        })
    }

    //pridat funkce na overeni zobrazeni spravne zpravy v modalnim okne prohlizece
}
