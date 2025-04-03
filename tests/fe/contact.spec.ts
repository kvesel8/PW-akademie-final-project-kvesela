import { test } from '../fe/helpers/base'
import { ContactDataType } from '../../src/types/fe/feDataTypes'


const jsonData = JSON.parse(JSON.stringify(require('../../data/json/fe/contactData.json')))
const contactData = jsonData as ContactDataType

test.describe('Contact form tests', () => {

    test.beforeEach('Navigate to homepage', async ({homePage}) => {
        homePage.navigateToHomePage()
    })
   
   test('Fill contact form and send message', async({homePage, contact}) =>{
        await homePage.pageDialogOn()
        await contact.displayContactForm()
        await contact.fillContactEmail(contactData.contactEmail)
        await contact.fillContactName(contactData.contactName)
        await contact.fillMesage(contactData.message)
        await contact.clickSendMessageButton()
        await homePage.pageDialogOff()
    })

    test('Send contact form with no message', async({homePage, contact}) =>{
        await homePage.pageDialogOn()
        await contact.displayContactForm()
        await contact.fillContactEmail(contactData.contactEmail)
        await contact.fillContactName(contactData.contactName)
        await contact.clickSendMessageButton()
        await homePage.pageDialogOff()
    })

    test('Send contact form without contact email', async({homePage, contact}) =>{
        await homePage.pageDialogOn()
        await contact.displayContactForm()
        await contact.fillContactName(contactData.contactName)
        await contact.fillMesage(contactData.message)
        await contact.clickSendMessageButton()
        await homePage.pageDialogOff()
    })

    test('Send empty contact form', async({homePage, contact}) => {
        await homePage.pageDialogOn()
        await contact.displayContactForm()
        await contact.clickSendMessageButton()
        await homePage.pageDialogOff()
    })
})

