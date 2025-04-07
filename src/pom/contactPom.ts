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
        await this._test.step('Display contact form', async() => {
            await this._page.getByRole('link', { name: `${contactSel.CONTACT_FORM}` }).click()
        })
    }

    public async fillContactEmail(email:string){
        await this._test.step('Fill contact email in contact form', async() => {
            await this._fillBySelector(contactSel.EMAIL_FIELD, email)
        })
    }

    public async fillContactName(name:string){
        await this._test.step('Fill cotact name in contact form', async() => {
            await this._fillBySelector(contactSel.NAME_FIELD, name)
        })
    }

    public async fillMesage(message:string){
        await this._test.step('Fill message in contact form', async() => {
            await this._page.getByRole('textbox', { name: contactSel.MESSAGE_FIELD}).fill(message)
        })
    }

    public async clickSendMessageButton(){
        await this._test.step('Click send message button to send contact form', async() => {
            await this._page.getByText(contactSel.SEND_BUTTON).first().click()
        })
    }

    public async clickCloseButton(){
        await this._test.step('Click close button to close contact form', async() => {
            await this._page.getByLabel('New message').getByText(`${contactSel.CLOSE_BUTTON}`).click()
        })
    }

    //pridat funkce na overeni zobrazeni spravne zpravy v modalnim okne prohlizece
}