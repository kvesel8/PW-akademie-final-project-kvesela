import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, Page } from "@playwright/test";
import { signUpSel } from "../../data/selectors/feSel";
import { TestSecretsType } from '../../src/types/fe/globalTypes'
import { FeUtils } from "../lib/feUtils";

export class SignUpPom extends FeUtils {
    protected _testSecrets: TestSecretsType

    constructor(
        page: Page,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>,
        testSecrets: TestSecretsType
    ) {
        super(page, test)
        this._testSecrets = testSecrets
    }

    public async displaySignUpForm(){
        await this._test.step('Navigate to Sign up', async() => {
            await this._clickBySelector(signUpSel.SIGNUP_FORM)
        })
    }

    public async fillUserName( username: string){
        await this._test.step('Fill username in signup form', async() => {
            await this._fillBySelector(signUpSel.USERNAME_FIELD, username)
        })
    }

    public async fillPassword( password: string){
        await this._test.step('Fill password in signup form', async() => {
            await this._fillBySelector(signUpSel.PASSWORD_FIELD, password)
        })
    }

    public async clickSignUpButton(){
        await this._test.step('Click on signup button', async() => {
            await this._page.getByRole('button', { name: signUpSel.SIGNUP_BUTTON }).click()
        })
    }

    public async clickCloseButton(){
        await this._test.step('Click close button to close signup modal', async() => {
            await this._page.getByLabel(signUpSel.SIGNUP_BUTTON).getByText(signUpSel.CLOSE_BUTTON).click()
        })
    }
    
    //pridat funkce na overeni zobrazeni spravne zpravy v modalnim okne prohlizece

    public async checkSignUpDialogMessage(pagedialogMessage: string){
        await this._test.step('Check the message displayed in dialog window after click Sign up button', async() => {
            await this._checkPageDialogMessage(pagedialogMessage)
        })
    }
}