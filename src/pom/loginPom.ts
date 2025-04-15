import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, Page, expect } from '@playwright/test'
import { loginSel } from '../../data/selectors/feSel'
import { TestSecretsType } from '../../src/types/fe/globalTypes'
import { FeUtils } from '../lib/feUtils'


export class LoginPom extends FeUtils {
    protected _testSecret: TestSecretsType

    constructor (
        page:Page,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>,
        testSecret: TestSecretsType
    ) {
        super(page, test)
        this._testSecret = testSecret
    }

    public async displayLoginForm(){
        await this._clickBySelector(loginSel.LOGIN_FORM)
    }

    public async fillUsername( username: string){
        await this._fillBySelector(loginSel.USERNAME_FIELD, username)
    }

    public async fillPassword(password: string){
        await this._fillBySelector(loginSel.PASSWORD_FIELD, password)
    }

    public async clickLoginButton(){
        await this._clickByRole('button', loginSel.LOGIN_BUTTON)
    }

    public async clickCloseButton(){
        await this._clickByLabelAndText(loginSel.LOGIN_BUTTON, loginSel.CLOSE_BUTTON)
    }

    public async logOut(){
        await this._test.step('Log out user', async() => {
            await expect(this._page.locator(loginSel.LOGOUT)).toBeVisible()
            await this._clickBySelector(loginSel.LOGOUT)
        })
    }

    //pridat funkce na overeni zobrazeni spravne zpravy v modalnim okne prohlizece
}
