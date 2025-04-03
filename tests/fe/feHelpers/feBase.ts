import { test as base} from '@playwright/test'
import dotenv from 'dotenv'
import { TestConfigType, TestSecretsType } from '../../../src/types/fe/globalTypes'
import { LoginPom } from '../../../src/pom/loginPom'
import { HomePagePom } from '../../../src/pom/homePagePom'
import { SignUpPom } from '../../../src/pom/signUpPom'
import { ContactPom } from '../../../src/pom/contactPom'
import { CartOrderPom } from '../../../src/pom/cartOrderPom'
import { AboutUsPom } from '../../../src/pom/aboutUsPom'


dotenv.config({override:true})

const env = process.env.ENV || 'dev'
const testConfig: TestConfigType = require(`../../../data/envs/config_${env}.json`)

type FeTestFixtures = {
    login: LoginPom,
    homePage: HomePagePom,
    signUp: SignUpPom,
    contact: ContactPom,
    cartOrder: CartOrderPom,
    aboutUs: AboutUsPom,
    configs: TestConfigType,
    secrets: TestSecretsType
}

export const test = base.extend<FeTestFixtures>({
    secrets:[
        {
            username: process.env.UNAME,
            password: process.env.PWORD
        },
        {
            option:true   
        }
    ],
    configs:[
        {
            url: testConfig.url,
            apiEndpoint: testConfig.apiEndpoint
        },
        {
            option:true
        }
    ],
    login: async({page, secrets}, use) => {
        await use (
            new LoginPom(page, test, secrets),
           
        )
    },
    homePage: async({page, configs}, use) => {
       await use (
        new HomePagePom(page, test, configs)
       ) 
    },
    signUp: async({page, secrets}, use) => {
        await use (
           new SignUpPom(page, test, secrets) 
        )
    },
    contact: async({page}, use) => {
        await use (
            new ContactPom(page, test)
        )
    },
    cartOrder: async({page}, use) => {
        await use (
            new CartOrderPom(page, test)
        )
    },
    aboutUs: async({page}, use) => {
        await use (
            new AboutUsPom(page, test)
        )
    }
})

export {expect} from '@playwright/test' 