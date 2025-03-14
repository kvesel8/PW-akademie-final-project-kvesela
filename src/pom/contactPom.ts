import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, Page, expect } from '@playwright/test'
import { contactSel } from '../../data/selectors/contactSel'

export class ContactPom {
    protected _page: Page
    protected _test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>

    constructor(
        page: Page,
        test: TestType <PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>
    ) {
        this._page = page
        this._test = test
    }

    public async displayContactForm(){
        await this._test.step('Display contact form', async() => {
            await this._page.getByText(contactSel.CONTACT_FORM).click()
        })
    }

    public async fillContactEmail(email:string){
        await this._test.step('Fill contact email in contact form', async() => {
            await this._page.locator(contactSel.EMAIL_FIELD).first().fill(email)
        })
    }

    public async fillContactName(name:string){
        await this._test.step('Fill cotact name in contact form', async() => {
            await this._page.locator(contactSel.NAME_FIELD).first().fill(name)
        })
    }

    public async fillMesage(message:string){
        await this._test.step('Fill message in contact form', async() => {
            await this._page.locator(contactSel.MESSAGE_FIELD).first().fill(message)
        })
    }

    public async clickSendMessageButton(){
        await this._test.step('Click send message button to send contact form', async() => {
            await this._page.getByText(contactSel.SEND_BUTTON).first().click()
        })
    }

    public async clickCloseButton(){
        await this._test.step('Click close button to close contact form', async() => {
            await this._page.getByLabel(contactSel.SEND_BUTTON).getByText(contactSel.CLOSE_BUTTON).click()
        })
    }

    //pridat funkce na overeni zobrazeni spravne zpravy v modalnim okne prohlizece
}