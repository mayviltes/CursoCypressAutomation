class searchLocators {
    constructor() {
        this.searchBtn = 'resumenDataTitle';//
        this.confirmarBtn = 'singleOrderSummary'; // 

        this.searchBtn2 = '#search-black'; 
        this.enterProduct = '.main_header';
    }
}

export default class Search{
    constructor () {
        this.locators = new searchLocators();
    }

    getSearchProduct(){
        return cy.get(this.locators.searchBtn);
    }

    getInputProduct(){
        return cy.get(this.locators.inputProduct);
    }

    getSearchProduct2(){
        return cy.get(this.locators.searchBtn2);
    }

    getEnterProduct(){
        return cy.get(this.locators.enterProduct);
    }
}
