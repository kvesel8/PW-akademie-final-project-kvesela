import { test as beBase} from '@playwright/test'
import { TestConfigType } from '../../../src/types/fe/globalTypes'
import dotenv from 'dotenv'
import { ActivitiesSom } from '../../../src/som/activitiesSom'
import { AuthorsSom } from '../../../src/som/authorsSom'
import { BooksSom } from '../../../src/som/booksSom'
import { CoverPhotosSom } from '../../../src/som/coverPhotosSom'
import { UsersSom } from '../../../src/som/usersSom'

dotenv.config({override:true})
const env = process.env.ENV || 'dev'
const testConfig = require(`../../../data/envs/config_${env}.json`)

type BeTestFixtures = {
    activities: ActivitiesSom,
    authors: AuthorsSom,
    books: BooksSom,
    coverPhotos: CoverPhotosSom,
    users: UsersSom
    configs: TestConfigType
}

export const test = beBase.extend<BeTestFixtures>({
    configs:[
        {
            url: testConfig.url,
            apiEndpoint: testConfig.apiEndpoint
        },
        {
            option: true
        }
    ],
    activities: async({request, configs}, use) => {
        await use (
            new ActivitiesSom(request, test, configs)
        )
    },
    authors: async ({request, configs}, use) => {
        await use (
            new AuthorsSom(request, test, configs)
        )
    },
    books: async({request, configs}, use) => {
        await use (
            new BooksSom(request, test, configs)
        )
    },
    coverPhotos: async({request, configs}, use) =>{
        await use (
            new CoverPhotosSom(request, test, configs)
        )
    },
    users: async({request, configs}, use) => {
        await use (
            new UsersSom(request, test, configs)
        )
    }
})

export {expect} from '@playwright/test'




