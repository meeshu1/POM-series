// custom commands + mochaawesome report + headless mode + cutom script


/// <reference types = 'cypress'/>

import {addToCart} from '../../Pages/addToCart'
const flowData = new addToCart()

import testData from '../../fixtures/login.json'

describe(' TEST SUITE ', () => {

    beforeEach(() => {
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
        cy.Login(testData.login.email, testData.login.password)
    })

    it('should work by usign custom command and POM', () => {
        flowData.searchProduct(testData.product.productName)
        flowData.addProductToCart()
        flowData.verifuSuccessMessage().should('contain', testData.testCase.successMessage).and('contain', testData.product.productName)   
    })
})  


// for headles mode write (npx cypress run)
// add a script in package. json for a particular spec run and then write npm run 'script name'

//install mochawesome reporter npm i --save-dev cypress-mochawesome-reporter