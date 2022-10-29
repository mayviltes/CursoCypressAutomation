export default class AddProduct{
    constructor () {
        this.locators = {
            addBtn : '#opener',
            myCart :  '#order_details_cart_title',
            continueBtn : '#WC_CheckoutLogonf_div_10'
        }            
    }

    getAddBtn(){
        return cy.get(this.locators.addBtn);
    }

    getMyCart(){
        return cy.get(this.locators.myCart);
    }

    getContinueBtn(){
        return cy.get(this.locators.continueBtn);
    }
}
