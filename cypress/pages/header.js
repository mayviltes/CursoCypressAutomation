class headerLocators {
    constructor() {
        this.loginBtn = 'a#Header_GlobalLogin_signInQuickLink > .button-login'; 
    }
}

export default class Header{
    constructor () {
        this.locators = new headerLocators();
    }

    getLoginBtn(){
        return cy.get(this.locators.loginBtn);
    }
}
