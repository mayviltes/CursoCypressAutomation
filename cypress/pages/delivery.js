class deliveryLocators {
    constructor() {
        this.inputMail = '#WC__ShoppingCartAddressEntryForm_billingAddressCreateEditFormDiv_1_email1_1';
        this.typeDelivery = '#physicalstore_opcion_shipTypeOnline';
        this.checkTerm = '#term_cond';
        this.continueBtn = '#WC_UnregisteredCheckout_links_4';
    }
}

export default class Delivery{
    constructor () {
        this.locators = new deliveryLocators();
    }

    getInputMail(){
        return cy.get(this.locators.inputMail);
    }

    getTypeDelivery(){
        return cy.get(this.locators.typeDelivery);
    }

    getCheckTerm(){
        return cy.get(this.locators.checkTerm);
    }

    getContinueBtn(){
        return cy.get(this.locators.continueBtn);
    }
}
