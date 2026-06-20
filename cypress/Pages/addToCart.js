
// this is for the POM-custcommands' add to cart scenario
export class addToCart {


    // create an object
    weblocators = {

        searchBox: '.form-control.input-lg',
        searchButton: '.btn.btn-default.btn-lg',
        addToCart: 'Add to Cart',
        succesMessage: '.alert.alert-success.alert-dismissible'

    }

    searchProduct(productName){
        cy.get(this.weblocators.searchBox).type(productName)   //product name is in the fixture file
        cy.get(this.weblocators.searchButton).click()

    }

    addProductToCart(){
        cy.contains(this.weblocators.addToCart).first().click()
    }

    //if you want to perform further actions on this web locator then use return
    verifuSuccessMessage(){
        return cy.get(this.weblocators.succesMessage)
    }


}