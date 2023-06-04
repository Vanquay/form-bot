import { Builder, By } from "selenium-webdriver";
import dotenv from "dotenv";
import { elements } from "./CONSTANTS";

console.log('Application bot initialized')

//Initialize driver
dotenv.config()
const driver = await new Builder().forBrowser('firefox').build()
await driver.get(process.env.SIGNUP_URL!)

export const signIn = async() => {
    await driver.manage().setTimeouts( { implicit: 10000 } );
    let email = await driver.findElement(By.id('input-4'))
    email.click()
    await driver.actions().sendKeys(process.env.EMAIL!).perform()
    let password = await driver.findElement(By.id('input-5'))
    password.click()
    await driver.actions().sendKeys(process.env.PASSWORD!).perform()
    let signInButton = await driver.findElement(By.xpath(elements.signIn))
    const actions = driver.actions({async: true});
    await actions.move({origin: signInButton}).click().perform();
    fileUpload()
    //driver.quit()
}

export const fileUpload = async() => {
    await driver.findElement(By.className("css-1hyfx7x")).sendKeys(process.env.RESUME!)
    //Next Page
    let continueButton = driver.findElement(By.xpath(elements.continueButton))
    continueButton.click()
}

//Autofill fills some part in already
export const myInformation = () => {

}
signIn()