import { test } from '../be/beHelpers/beBase'
import { AuthorsDataType } from '../../src/types/be/beDataType'
import { getRandomInt } from '../../src/utils/randomValues'

const jsonData = JSON.parse(JSON.stringify(require('../../data/json/be/authorsData.json')))
const authorsData = jsonData as AuthorsDataType

test('Get list of authors', async({authors}) => {
    await authors.getListOfAuthors()
})

test('Create a new author', async({authors}) => {   
    await authors.createAuthor(authorsData)
})

test('Get author by book id', async({authors}) => {
    const genId = getRandomInt(1,596)

    await authors.getAuthorByBookId(genId)
})

test('Get author by id', async({authors}) => {
    const genId = getRandomInt(1,596)

    await authors.getAuthorById(genId)
})

test('Update author by id', async({authors}) => {
    const genId = getRandomInt(1,596)

    await authors.updateAuthorById(genId, authorsData)
})

test('Delete author by id', async({authors}) => {
    const genId = getRandomInt(1,596)

    await authors.deleteAuthorById(genId)
})

