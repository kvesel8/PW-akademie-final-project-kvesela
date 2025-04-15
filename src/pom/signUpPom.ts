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
        await this._clickBySelector(signUpSel.SIGNUP_FORM)
    }

    public async fillUserName( username: string){
        await this._fillBySelector(signUpSel.USERNAME_FIELD, username)
    }

    public async fillPassword( password: string){
        await this._fillBySelector(signUpSel.PASSWORD_FIELD, password)
    }

    public async clickSignUpButton(){
            await this._clickByRole('button', signUpSel.SIGNUP_BUTTON)
    }

    public async clickCloseButton(){
        await this._clickByLabelAndText(signUpSel.SIGNUP_BUTTON, signUpSel.CLOSE_BUTTON)  
    }
    
    //pridat funkce na overeni zobrazeni spravne zpravy v modalnim okne prohlizece

    public async checkSignUpDialogMessage(pagedialogMessage: string){
        await this._checkPageDialogMessage(pagedialogMessage)
    }
}