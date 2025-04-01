import { test } from '@playwright/test'
import { BooksSom } from '../../src/som/booksSom'
import { getRandomInt } from '../../src/utils/randomValues'
import {BooksDataType } from '../../src/types/be/booksDataType'
import dotenv from 'dotenv'
import { TestConfigType } from '../../src/types/fe/globalTypes'


dotenv.config({override: true})
const env = process.env.ENV || 'dev'
const testConfig: TestConfigType = require(`../../data/envs/config_${env}.json`) 

const jsonData = JSON.parse(JSON.stringify(require('../../data/json/be/booksData.json')))
const booksData = jsonData as BooksDataType

test('Get list of books', async({request}) => {
    const books = new BooksSom(request, test, testConfig)

    await books.getListOfBooks()
})

test('Create a new book', async({request}) => {
    const books = new BooksSom(request, test, testConfig)

    await books.createBook(booksData)
})

test('Get book by id', async({request}) => {
    const books = new BooksSom(request, test, testConfig)
    const genId = getRandomInt(1,201)

    await books.getBookById(genId)
})

test('Update book by id', async({request}) => {
    const books = new BooksSom(request, test, testConfig)
    const genId = getRandomInt(1,201)

    await books.updateBookById(genId, booksData)

})

test('Delete book by id', async({request}) => {
    const books = new BooksSom(request, test, testConfig)
    const genId = getRandomInt(1,201)

    await books.deleteBookById(genId)
})

