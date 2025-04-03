import { test } from '../be/beHelpers/beBase'
import { ActivitiesDataType } from '../../src/types/be/beDataType'
import { getRandomInt } from '../../src/utils/randomValues'


const jsonData = JSON.parse(JSON.stringify(require('../../data/json/be/activitiesData.json')))
const activityData = jsonData as ActivitiesDataType


test('Display list of all users', async({activities}) => {
    await activities.getListOfActivities()
})

test('Create an activity', async({activities}) =>{
    await activities.createActivity(activityData)
})

test('Get activity by id', async({activities}) => {
    const genId = getRandomInt(1,31)

    await activities.getActivityById(genId)
})

test('Update activity by id', async({activities}) => {
    const genId = getRandomInt(1,31)

    await activities.updateActivityById(genId,activityData)
})

test('Delete activity by id', async({activities}) => {
    const genId = getRandomInt(1,31)

    await activities.deleteActivityById(genId)
})