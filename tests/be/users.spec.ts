import { test} from '../be/beHelpers/beBase'
import { UsersDataType } from '../../src/types/be/beDataType'
import { getRandomInt } from '../../src/utils/randomValues'


const jsonData = JSON.parse(JSON.stringify(require('../../data/json/be/usersData.json')))
const usersData = jsonData as UsersDataType


test('Display list of all users', async ({users}) => {
    await users.getListOfAllUsers()
})

test('Add new user', async ({users}) => {
    await users.createUser(usersData)
})

test('Get information about user with userid', async({users}) => {
    const genId = getRandomInt(1,10)

    await users.getUserById(genId) //funkce ktera vraci nahodne generovane cislo? kde vzit id uzivatelu? nacist si je do souboru? nebo z response do promene?
})

test ('Update user', async({users}) => {
    const genId = getRandomInt(1,10)

   await users.updateUser(genId, usersData) //funkce na generovani nahodnych jmen a hesel?? - mam, ale jak to napsaovat na dat. strukturu
})

test('Delete user with id', async ({users}) =>{
    const genId = getRandomInt(1,10)

   await users.deleteUser(genId) 
})

