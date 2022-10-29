/// <reference types="cypress" />
import HeaderPage from "../pages/header.js";
import LoginPage from "../pages/login.js";
import SearchPage from "../pages/search.js";
import AddProductPage from "../pages/addProduct";
import DeliveryPage from "../pages/delivery.js";
import PaymentPage from "../pages/payment.js";
import Data from "../fixtures/Login/usuarios.json";
import Titulos from "../fixtures/Login/titulos.json";


describe("Logueos", () => {
  const header = new HeaderPage();
  const login = new LoginPage();
  const search = new SearchPage();
  const addProduct = new AddProductPage();
  const delivery = new DeliveryPage();
  const payment = new PaymentPage();

  beforeEach(() => {
    cy.visit("https://uat-tienda.claro.amx/catalogo/inicio#facet:&productBeginIndex:0&orderBy:6&pageView:grid&minPrice:&maxPrice:&pageSize:&");
  });

  it("Login Failed",() => {

    header.getLoginBtn().click();

    login.getInputUser().type(Data.usuarios[0].usuarioError).should("have.value", Data.usuarios[0].usuarioError);
    login.getInputPass().type(Data.usuarios[0].passError).should("have.value", Data.usuarios[0].passError);
    login.getLoginBtn().click();
    login.getTxtError().should("contain.text", Titulos.titulo[0].LoginError);
  })

  it.only("Login Correct", () => {
  
    header.getLoginBtn().click();

    login.getInputUser().clear().type(Data.usuarios[1].usuarioOk) //.should("have.value", Data.usuarios[1].usuarioOk);
    login.getInputPass().type(Data.usuarios[1].passOk) //.should("have.value", Data.usuarios[1].passOk);
    login.getLoginBtn().click();
    //
    //.should("be.visible")
    //.should("not.exist")

    //
    login.getUserEnter().should("contain.text", "Maria Lucinda Barboza");

    
    search.getSearchProduct().click();
    search.getInputProduct().type("7001646");
    search.getSearchProduct2().click();
    search.getEnterProduct().should("contain.text", "SanDisk Ultra Memoria MicroSD 64GB");


    addProduct.getAddBtn().click();
    addProduct.getMyCart().should("contain.text", "Mi carrito");
    addProduct.getContinueBtn().click();


    delivery.getInputMail().type("mispruebas.testing@gmail.com");
    delivery.getTypeDelivery().click();
    delivery.getCheckTerm().click();
    delivery.getContinueBtn().click();

    payment.getOpcTarj().should('have.css','border-radius','4px'); 
    payment.getSelectTarj().click(); 
    payment.getTarjetaTipo("Visa").click();
   // payment.getTarjeta().last().click(); //first();
  });

});
