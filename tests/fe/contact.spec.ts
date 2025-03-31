import { test } from '@playwright/test'
import { HomePagePom } from '../../src/pom/homePagePom'
import { ContactPom } from '../../src/pom/contactPom'
import { ContactDataType } from '../../src/types/fe/contactDataTypes'
import dotenv from 'dotenv'
import { TestConfigType } from '../../src/types/fe/globalTypes'


dotenv.config({ override: true})

const env = process.env.ENV || 'dev'
const testConfig: TestConfigType = require(`../../data/envs/config_${env}.json`)

const jsonData = JSON.parse(JSON.stringify(require('../data/json/contactData.json')))
const contactData = jsonData as ContactDataType

test.describe('Contact form tests', () => {
    let homePage
    let contact

    test.beforeEach('Initialization of poms and navigate to homepage', async ({page}) => {
        homePage = new HomePagePom(page, test, testConfig)
        contact = new ContactPom(page, test)

        homePage.navigateToHomePage()
    })
   
   test('Fill contact form and send message', async({}) =>{
        await homePage.pageDialogOn()
        await contact.displayContactForm()
        await contact.fillContactEmail(contactData.contactEmail)
        await contact.fillContactName(contactData.contactName)
        await contact.fillMesage(contactData.message)
        await contact.clickSendMessageButton()
        await homePage.pageDialogOff()
    })

    test('Send contact form with no message', async({}) =>{
        await homePage.pageDialogOn()
        await contact.displayContactForm()
        await contact.fillContactEmail(contactData.contactEmail)
        await contact.fillContactName(contactData.contactName)
        await contact.clickSendMessageButton()
        await homePage.pageDialogOff()
    })

    test('Send contact form without contact email', async({}) =>{
        await homePage.pageDialogOn()
        await contact.displayContactForm()
        await contact.fillContactName(contactData.contactName)
        await contact.fillMesage(contactData.message)
        await contact.clickSendMessageButton()
        await homePage.pageDialogOff()
    })

    test('Send empty contact form', async({}) => {
        await homePage.pageDialogOn()
        await contact.displayContactForm()
        await contact.clickSendMessageButton()
        await homePage.pageDialogOff()
    })
})

