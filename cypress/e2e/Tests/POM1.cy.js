/// <reference types = 'cypress' />


// 1st APPROACH
//import the page class then create an obj
import { registerPage } from "../../Pages/registerPage"
const registerObj = new registerPage()

// import the fixture file 
import registerData from '../../fixtures/register.json'


//2nd APPROACH
//import faker for the second test suite
import { faker, Faker } from "@faker-js/faker"

// First approach
//problem is it will only work once then i will have to change the email in the fixture file
describe('Test Suite', () => {
  it('should automate using POM', () => {

    registerObj.openURL()
    registerObj.enterFirstName(registerData.firstName)
    registerObj.enterLastName(registerData.lastName)
    registerObj.enterEmail(registerData.email)
    registerObj.enterTelephone(registerData.telephone)
    registerObj.enterPassword(registerData.password)
    registerObj.checkPolicyCheckbox()
    registerObj.clickContinueButton()
    registerObj.assertionCheck()
   
  })
})

// solution we can use faker library for this so it generates new email for each time

/// npm install @faker-js/faker --save-dev  
describe.only('Test Suite 2', () => {

  let password = faker.internet.password()

  it('should automate using POM', () => {

    registerObj.openURL()
    registerObj.enterFirstName(registerData.firstName)
    registerObj.enterLastName(registerData.lastName)
    registerObj.enterEmail(faker.internet.email())
    registerObj.enterTelephone(registerData.telephone)
    registerObj.enterPassword(password)
    registerObj.checkPolicyCheckbox()
    registerObj.clickContinueButton()
    registerObj.assertionCheck()
   
  })
})