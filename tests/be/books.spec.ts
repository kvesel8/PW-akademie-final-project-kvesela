import { test } from '../be/beHelpers/beBase'
import { getRandomInt } from '../../src/utils/randomValues'
import {BooksDataType } from '../../src/types/be/beDataType'


const jsonData = JSON.parse(JSON.stringify(require('../../data/json/be/booksData.json')))
const booksData = jsonData as BooksDataType

test('Get list of books', async({books}) => {
    await books.getListOfBooks()
})

test('Create a new book', async({books}) => {
       await books.createBook(booksData)
})

test('Get book by id', async({books}) => {
    const genId = getRandomInt(1,201)

    await books.getBookById(genId)
})

test('Update book by id', async({books}) => {
    const genId = getRandomInt(1,201)

    await books.updateBookById(genId, booksData)
})

test('Delete book by id', async({books}) => {
    const genId = getRandomInt(1,201)

    await books.deleteBookById(genId)
})

