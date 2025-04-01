import { test} from '@playwright/test'
import { UsersSom } from '../../src/som/usersSom'
import { TestConfigType } from '../../src/types/fe/globalTypes'
import dotenv from 'dotenv'
import { usersDataType } from '../../src/types/be/usersDataType'
import { getRandomInt } from '../../src/utils/randomValues'

dotenv.config({override:true})
const env = process.env.ENV || 'dev'
const testConfig: TestConfigType = require(`../../data/envs/config_${env}.json`)

const jsonData = JSON.parse(JSON.stringify(require('../../data/json/be/usersData.json')))
const usersData = jsonData as usersDataType


test.only('Display list of all users', async ({request}) => {
    const users = new UsersSom(request, test, testConfig)

    await users.getListOfAllUsers()
})

test('Add new user', async ({request}) => {
    const users = new UsersSom(request, test, testConfig)

    await users.createUser(usersData)
})

test('Get information about user with userid', async({request}) => {
    const users = new UsersSom(request, test, testConfig)
    const genId = getRandomInt(1,10)

    await users.getUserById(genId) //funkce ktera vraci nahodne generovane cislo? kde vzit id uzivatelu? nacist si je do souboru? nebo z response do promene?
})

test ('Update user', async({request}) => {
    const users = new UsersSom(request, test, testConfig)
    const genId = getRandomInt(1,10)

   await users.updateUser(genId, usersData) //funkce na generovani nahodnych jmen a hesel?? - mam, ale jak to napsaovat na dat. strukturu
})

test('Delete user with id', async ({request}) =>{
    const users = new UsersSom(request, test, testConfig)
    const genId = getRandomInt(1,10)

   await users.deleteUser(genId) 
})

