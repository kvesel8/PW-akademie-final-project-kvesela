import { test, APIResponse, APIRequestContext} from '@playwright/test'
import { Serializable } from 'node:child_process'
import { UsersSom } from '../../src/som/usersSom'
import { testConfigType } from '../../src/types/fe/globalTypes'
import dotenv from 'dotenv'

dotenv.config({override:true})
const env = process.env.ENV || 'dev'
const testConfig: testConfigType = require(`'../../data/envs/config_${env}.json'`)


test('Display list of all users', async ({request}) => {
    const users = new UsersSom(request, test, testConfig)

    users.getListOfAllUsers()

})

test('Add new user', async ({request}) => {
    const users = new UsersSom(request, test, testConfig)
})

test('Get information about user with userid', async({request}) => {
    const users = new UsersSom(request, test, testConfig)
})

test ('Update user', async({request}) => {
    const users = new UsersSom(request, test, testConfig)
})

test('Delete user with id', async ({request}) =>{
    const users = new UsersSom(request, test, testConfig)
})

