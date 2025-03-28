import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, Page, expect } from '@playwright/test'
import { loginSel } from '../../data/selectors/loginSel'
import { testSecretsType } from '../../src/types/fe/globalTypes'
import { FeUtils } from '../lib/feUtils'


export class LoginPom extends FeUtils {
    protected _testSecret: testSecretsType

    constructor (
        page:Page,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>,
        testSecret: testSecretsType
    ) {
        super(page, test)
        this._testSecret = testSecret
    }

    public async displayLoginForm(){
        await this._test.step('Display of login form', async () => {
            await this._clickBySelector(loginSel.LOGIN_FORM)
        })
    }

    public async fillUsername( username: string){
        await this._test.step('Fill username in login form', async () =>{
            await this._fillBySelector(loginSel.USERNAME_FIELD, username)
        })
    }

    public async fillPassword(password: string){
        await this._test.step('Fill user password', async () => {
            await this._fillBySelector(loginSel.PASSWORD_FIELD, password)
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
            await this._clickBySelector(loginSel.LOGOUT)
        })
    }

    //pridat funkce na overeni zobrazeni spravne zpravy v modalnim okne prohlizece
}
