import { Builder } from "selenium-webdriver";

const url = process.env.SIGNUP_URL
console.log(url)

console.log('Workday sign up bot initialized');

const driver = await new Builder().forBrowser('chrome').build()


