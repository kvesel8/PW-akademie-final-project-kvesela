import { test, APIResponse, APIRequestContext} from '@playwright/test'
import { Serializable } from 'node:child_process'
import { UsersSom } from '../../src/som/usersSom'



test('Display list of all users', async ({request}) => {
    const users = new UsersSom(request, test)

    users.getListOfAllUsers()

})

test('Add new user', async ({request}) => {

})

test('Get information about user with userid', async({request}) => {

})

test ('Update user', async({request}) => {

})

test('Delete user with id', async ({request}) =>{

})

