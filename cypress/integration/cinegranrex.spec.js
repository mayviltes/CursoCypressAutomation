/// <reference types="cypress" />

describe("Cine Gran Rex", () => {

  it("Llamo servicio: /FuncionesYHorarios", () => {
    cy.llamadaServicio("peliculas/PeliculasConFuncionesYHorarios.php", "funcionesYHorarios") ; 
    })


  it("Llamo servicio: /Estrenos", () => {
    cy.llamadaServicio(
      "peliculas/Estrenos.php",
      "Estrenos", 
      "estrenos.json");
  })

}) 