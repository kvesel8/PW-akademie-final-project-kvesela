import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, Page, expect } from '@playwright/test'
import { contactSel } from '../../data/selectors/feSel'
import { FeUtils } from '../lib/feUtils'

export class ContactPom extends FeUtils {
   
    constructor(
        page: Page,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>
    ) {
       super(page, test)
    }

    public async displayContactForm(){
        await this._clickByRole('link', contactSel.CONTACT_FORM)
    }

    public async fillContactEmail(email: string){
        await this._fillBySelector(contactSel.EMAIL_FIELD, email)
    }

    public async fillContactName(name: string){
        await this._fillBySelector(contactSel.NAME_FIELD, name)
    }

    public async fillMesage(message: string){
        await this._fillByRole('textbox', contactSel.MESSAGE_FIELD, message)
    }

    public async clickSendMessageButton(){
        await this._clickByText(contactSel.SEND_BUTTON)
    }

    public async clickCloseButton(){
        await this._clickByLabelAndText('New message', contactSel.CLOSE_BUTTON)
    }

    //pridat funkce na overeni zobrazeni spravne zpravy v modalnim okne prohlizece
}