class loginLocators {
    constructor() {
        this.InputUser = '#Header_GlobalLogin_WC_AccountDisplay_FormInput_logonId_In_Logon_1'; 
        this.InputPass = '#Header_GlobalLogin_WC_AccountDisplay_FormInput_logonPassword_In_Logon_1';
        this.LoginBtn = '#Header_GlobalLogin_WC_AccountDisplay_links_2';
        this.UserEnter = '#Header_GlobalLogin_signOutQuickLinkUser';
        this.TxtError = '#Header_GlobalLogin_logonErrorMessage_GL';
    }
}

export default class Login{
    constructor () {
        this.locators = new loginLocators();
    }

    getInputUser(){
        return cy.get(this.locators.InputUser);
    }

    getInputPass(){
        return cy.get(this.locators.InputPass);
    }

    getLoginBtn(){
        return cy.get(this.locators.LoginBtn);
    }

    getUserEnter(){
        return cy.get(this.locators.UserEnter);
    }

    getTxtError(){
        return cy.get(this.locators.TxtError);
    }
}
