import { test } from '@playwright/test'
import { HomePagePom } from '../src/pom/homePagePom'
import { ContactPom } from '../src/pom/contactPom'
import { contactType } from '../src/types/contactDataTypes'

const jsonData = JSON.parse(JSON.stringify(require('../data/json/contactData.json')))
const contactData = jsonData as contactType

test.describe('Contact form tests', () => {
   
   test('Fill contact form and send message', async({page}) =>{
        const homePage = new HomePagePom(page, test)
        const contact = new ContactPom(page, test)

        await homePage.navigateToHomePage()
        await contact.pageDialogOn()
        await contact.displayContactForm()
        await contact.fillContactEmail(contactData.contactEmail)
        await contact.fillContactName(contactData.contactName)
        await contact.fillMesage(contactData.message)
        await contact.clickSendMessageButton()
        await contact.pageDialogOff()
    })

    test('Send empty contact form', async({page}) => {
        const homePage = new HomePagePom(page, test)
        const contact = new ContactPom(page, test)

        await homePage.navigateToHomePage()
        await contact.pageDialogOn()
        await contact.displayContactForm()
        await contact.clickSendMessageButton()
        await contact.pageDialogOff()
    })
})

