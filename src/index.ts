import { Builder, By, Key, logging, until } from "selenium-webdriver";
import dotenv from "dotenv";
import { TIMEOUT } from "dns";

logging.Level.ALL
dotenv.config();
console.log('Workday sign up bot initialized');

//Initialize driver
const driver = await new Builder().forBrowser('firefox').build()
await driver.get(process.env.SIGNUP_URL!)

export const signUpPage = async() => {
    await driver.wait(until.elementsLocated(By.className('css-14pfav7')), 15000)
    let createAccountButton = await driver.findElement(By.className('css-14pfav7'));
    createAccountButton.click();
    await driver.manage().setTimeouts( { implicit: 10000 } );
    inputSignUp();
}

export const inputSignUp = async() => {
    await driver.manage().setTimeouts( { implicit: 10000 } );
    let email = await driver.findElement(By.id('input-6'))
    email.click()
    await driver.actions().sendKeys(process.env.EMAIL!).perform()
    let password = await driver.findElement(By.id('input-7'))
    password.click()
    await driver.actions().sendKeys(process.env.PASSWORD!).perform()
    let verifyPassword = await driver.findElement(By.id('input-8'))
    verifyPassword.click()
    await driver.actions().sendKeys(process.env.PASSWORD!).perform()
    let createButton = await driver.findElement(By.className('css-pr8xwr'))
    createButton.sendKeys(Key.ENTER);
    const actions = driver.actions({async: true});
    await actions.move({origin: createButton}).click().perform();
    //driver.quit()
}

signUpPage();

