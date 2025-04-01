import { test } from '@playwright/test'
import { AuthorsSom } from '../../src/som/authorsSom'
import { AuthorsDataType } from '../../src/types/be/authorsDataType'
import dotenv from 'dotenv'
import { getRandomInt } from '../../src/utils/randomValues'

dotenv.config({override:true})
const env = process.env.ENV || 'dev'
const testConfig = require(`../../data/envs/config_${env}.json`)

const jsonData = JSON.parse(JSON.stringify(require('../../data/json/be/authorsData.json')))
const authorsData = jsonData as AuthorsDataType

test.only('Get list of authors', async({request}) => {
    const authors = new AuthorsSom(request, test, testConfig)

    await authors.getListOfAuthors()
})

test('Create a new author', async({request}) => {
    const authors = new AuthorsSom(request, test, testConfig)
   
    await authors.createAuthor(authorsData)
})

test('Get author by book id', async({request}) => {
    const authors = new AuthorsSom(request, test, testConfig)
    const genId = getRandomInt(1,596)

    await authors.getAuthorByBookId(genId)
})

test('Get author by id', async({request}) => {
    const authors = new AuthorsSom(request, test, testConfig)
    const genId = getRandomInt(1,596)

    await authors.getAuthorById(genId)
})

test('Update author by id', async({request}) => {
    const authors = new AuthorsSom(request, test, testConfig)
    const genId = getRandomInt(1,596)

    await authors.updateAuthorById(genId, authorsData)
})

test('Delete author by id', async({request}) => {
    const authors = new AuthorsSom(request, test, testConfig)
    const genId = getRandomInt(1,596)

    await authors.deleteAuthorById(genId)
})

