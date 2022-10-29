/*** Libreria que espera que termine de escribir para continuar.***/

import 'cypress-wait-until';

const Ajv = require("ajv")
const ajv = new Ajv()  

/**
 * Consulta de Funciones y horarios
 * @method funcionesYHorarios
 * @param {string} lastUrl - ultima parte de la url que se va a sumar con los demas 
 * @param {string} fileName - nombre del archivo donde se va a guardar el response 
 **/
 
Cypress.Commands.add("llamadaServicio",(lastUrl, fileName, schem = false) => {
    cy.request ({
        method: "POST",
        url: "http://cinerex2.nexoserver.com.ar/mobile/consultas/" + lastUrl
      }).then((response) => {
         expect(response.status).to.eq(200);
         cy.log(JSON.stringify(response));
         cy.writeFile("cypress/fixtures/CinesGranRex/"+fileName+".json", response.body); 

        if(!schem) {
          cy.log("No hay validación del esquema");
         } else {
          cy.fixture("schemas/" + schem).then((JsonFile) => {
          cy.log(schem); 
          const validate = ajv.compile(JsonFile);
          const valid = validate(response.body);

        if (!valid) {
          cy.log("Hay un error en el esquema");
         } else {
          cy.log("El esquema es correcto");
         }
      })
    }
  })
})