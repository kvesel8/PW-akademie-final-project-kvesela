import { test } from '@playwright/test'
import { CoverPhotosSom } from '../../src/som/coverPhotosSom'
import { CoverPhotosDataType } from '../../src/types/be/coverPhotosDataType'
import dotenv from 'dotenv'
import { getRandomInt } from '../../src/utils/randomValues'

dotenv.config({override:true})
const env = process.env.ENV || 'dev'
const testConfig = require(`../../data/envs/config_${env}.json`)

const jsonData = JSON.parse(JSON.stringify(require('../../data/json/be/coverPhotosData.json')))
const coverPhotosData = jsonData as CoverPhotosDataType

test('Get list of cover photos', async({request}) => {
    const coverPhotos = new CoverPhotosSom(request, test, testConfig)

    await coverPhotos.getListOfCoverPhotos()
})

test('Create a new cover photo', async({request}) => {
    const coverPhotos = new CoverPhotosSom(request, test, testConfig)

    await coverPhotos.createCoverPhoto(coverPhotosData)
})

test('Get cover photo by book id', async({request}) => {
    const coverPhotos = new CoverPhotosSom(request, test, testConfig)
    const genId = getRandomInt(1,201)

    await coverPhotos.getCoverPhotoByBookId(genId)
})

test('Get cover photo by id', async({request}) => {
    const coverPhotos = new CoverPhotosSom(request, test, testConfig)
    const genId = getRandomInt(1,201)

    await coverPhotos.getCoverPhotoByCoverId(genId)
})

test('Update cover photo by id', async({request}) => {
    const coverPhotos = new CoverPhotosSom(request, test, testConfig)
    const genId = getRandomInt(1,201)

    await coverPhotos.updateCoverPhotoById(genId, coverPhotosData)
})

test('Delete cover photo by id', async({request}) => {
    const coverPhotos = new CoverPhotosSom(request, test, testConfig)
    const genId = getRandomInt(1,201)

    await coverPhotos.deleteCoverPhotoById(genId)
})