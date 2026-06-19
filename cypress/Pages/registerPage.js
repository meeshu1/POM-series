// Create a class with an object and the methods and export it to the test script 
// export will export the whole class in the script file

export class registerPage {

    // object
    weblocators = {

        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        confirmPassword: '#input-confirm',
        policyCheckbox:  'input[type="checkbox"]',
        continueButton: '.btn.btn-primary'

    }

    // create all methods

    // you can also add this url in the config file as env key
    openURL(){
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    }

    enterFirstName(fname){
        cy.get(this.weblocators.firstName).type(fname)
    }

    enterLastName(lname){
        cy.get(this.weblocators.lastName).type(lname)
    }

    enterEmail(email){
        cy.get(this.weblocators.email).type(email)
    }

    enterTelephone(tel){
        cy.get(this.weblocators.telephone).type(tel)
    }

    enterPassword(pass){
        cy.get(this.weblocators.password).type(pass)
        cy.get(this.weblocators.confirmPassword).type(pass)
    }

    checkPolicyCheckbox(){
        cy.get(this.weblocators.policyCheckbox).check()
        //cy.contains('I have read and agree to the ').click({ multiple: true })
    }

    clickContinueButton(){
        cy.get(this.weblocators.continueButton).click({ multiple: true, force: true})
        

    }

}