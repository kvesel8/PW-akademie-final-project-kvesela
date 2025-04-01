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


