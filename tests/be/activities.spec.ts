import { test } from '@playwright/test'
import { ActivitiesSom } from '../../src/som/activitiesSom'
import { ActivitiesDataType } from '../../src/types/be/beDataType'
import dotenv from 'dotenv'
import { TestConfigType } from '../../src/types/fe/globalTypes'
import { getRandomInt } from '../../src/utils/randomValues'


dotenv.config({override: true})
const env = process.env.ENV || 'dev'
const testConfig: TestConfigType = require(`../../data/envs/config_${env}.json`)

const jsonData = JSON.parse(JSON.stringify(require('../../data/json/be/activitiesData.json')))
const activityData = jsonData as ActivitiesDataType


test('Display list of all users', async({request}) => {
    const activities = new ActivitiesSom(request, test, testConfig)

    await activities.getListOfActivities()
})

test('Create an activity', async({request}) =>{
    const activities = new ActivitiesSom(request, test, testConfig)

    await activities.createActivity(activityData)
})

test('Get activity by id', async({request}) => {
    const activities = new ActivitiesSom(request, test, testConfig)
    const genId = getRandomInt(1,31)

    await activities.getActivityById(genId)
})

test('Update activity by id', async({request}) => {
    const activities = new ActivitiesSom(request, test, testConfig)
    const genId = getRandomInt(1,31)

    await activities.updateActivityById(genId,activityData)
})

test('Delete activity by id', async({request}) => {
    const activities = new ActivitiesSom(request, test, testConfig)
    const genId = getRandomInt(1,31)

    await activities.deleteActivityById(genId)
})