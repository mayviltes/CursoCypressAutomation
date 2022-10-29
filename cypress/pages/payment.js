class paymentLocators {
    constructor() {
        this.OpcTarj = '#fp_select_mobile_box_DecidirRest';
        this.selecTarj = '#pSelectorId';
        this.selecBanco = 'bSelectorId'
        this.selecCuotas = 'iSelectorId'
        this.inputTitular = 'accountName_1'
        this.inputNroTarj = 'account1_1'
        this.selecMes = 'dijit dijitReset dijitInline dijitLeft dijitDownArrowButton dropdown_chk_venc dijitSelect dijitValidationTextBox'
        this.selecAño = 'dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer'
        this.inputCod = 'cc_cvc_1'
        this.continueBtn = 'shippingBillingPageNext'
    }
}

export default class Payment{
    constructor () {
        this.locators = new paymentLocators();
    }

    getOpcTarj(){
        return cy.get(this.locators.OpcTarj);
    }

    getSelectTarj(){
        return cy.get(this.locators.selecTarj);
    }

    getTarjetaTipo(tipoTarjeta){
        return cy.get("[role='option']").contains(tipoTarjeta);
    }

    getTarjeta(){
        return cy.get("[role='option']");
    }

    getSelecCuotas(){
        return cy.get("[role='option']");
    }

    get(){
        return cy.get("");
    }

}


