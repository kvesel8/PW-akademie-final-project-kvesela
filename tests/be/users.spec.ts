import { test } from '@playwright/test'
import { Serializable } from 'node:child_process'
import { RespBody } from '../../src/types/be/respBodyType'

let resHeaders: RespBody['headers']
let resHeadersArray: RespBody['headersArray']
let resOk: RespBody['ok']
let resStatus: RespBody['status']
let resStatusText: RespBody['statusText']
let resUrl: RespBody['url']
let resJson: RespBody['json'] = Promise.resolve({})
let resText: RespBody['text']
let resBodyBuffer: RespBody['bodyBuffer']
let resBody: RespBody['body']


test('Display list of all users', async ({request}) => {

})

test('Add new user', async ({request}) => {

})

test('Get information about user with userid', async({request}) => {
    
})

test ('Update user', async({request}) => {

})

test('Delete user with id', async ({request}) =>{

})

