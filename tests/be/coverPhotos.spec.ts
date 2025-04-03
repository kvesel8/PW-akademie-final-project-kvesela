import { test } from '../be/beHelpers/beBase'
import { CoverPhotosDataType } from '../../src/types/be/beDataType'
import { getRandomInt } from '../../src/utils/randomValues'

const jsonData = JSON.parse(JSON.stringify(require('../../data/json/be/coverPhotosData.json')))
const coverPhotosData = jsonData as CoverPhotosDataType

test('Get list of cover photos', async({coverPhotos}) => {
        await coverPhotos.getListOfCoverPhotos()
})

test('Create a new cover photo', async({coverPhotos}) => {
        await coverPhotos.createCoverPhoto(coverPhotosData)
})

test('Get cover photo by book id', async({coverPhotos}) => {
    const genId = getRandomInt(1,201)

    await coverPhotos.getCoverPhotoByBookId(genId)
})

test('Get cover photo by id', async({coverPhotos}) => {
    const genId = getRandomInt(1,201)

    await coverPhotos.getCoverPhotoByCoverId(genId)
})

test('Update cover photo by id', async({coverPhotos}) => {
    const genId = getRandomInt(1,201)

    await coverPhotos.updateCoverPhotoById(genId, coverPhotosData)
})

test('Delete cover photo by id', async({coverPhotos}) => {
    const genId = getRandomInt(1,201)

    await coverPhotos.deleteCoverPhotoById(genId)
})