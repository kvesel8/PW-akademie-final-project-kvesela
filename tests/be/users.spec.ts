import { test} from '@playwright/test'
import { UsersSom } from '../../src/som/usersSom'
import { TestConfigType } from '../../src/types/fe/globalTypes'
import dotenv from 'dotenv'
import { usersDataType } from '../../src/types/be/usersDataType'

dotenv.config({override:true})
const env = process.env.ENV || 'dev'
const testConfig: TestConfigType = require(`'../../data/envs/config_${env}.json'`)

const jsonData = JSON.parse(JSON.stringify(require('../../data/json/be/usersData.json')))
const userData = jsonData as usersDataType


test('Display list of all users', async ({request}) => {
    const users = new UsersSom(request, test, testConfig)

    users.getListOfAllUsers()
})

test('Add new user', async ({request}) => {
    const users = new UsersSom(request, test, testConfig)

    users.createUser(userData)
})

test('Get information about user with userid', async({request}) => {
    const users = new UsersSom(request, test, testConfig)

    users.getUserById(454) //funkce ktera vraci nahodne generovane cislo? kde vzit id uzivatelu? nacist si je do souboru? nebo z response do promene?
})

test ('Update user', async({request}) => {
    const users = new UsersSom(request, test, testConfig)

    users.updateUser(587, userData) //funkce na generovani nahodnych jmen a hesel?? - mam, ale jak to napsaovat na dat. strukturu
})

test('Delete user with id', async ({request}) =>{
    const users = new UsersSom(request, test, testConfig)

    users.deleteUser(547) 
})

