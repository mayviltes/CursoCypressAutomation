## Tests: 
    El proyecto cuenta con 2 tests en la carpeta Integration, cinesgranrex (servicio) y login (UI). A su vez, cada test contiene 2 escenarios.

## Escenarios: 
    Tests de servicio: 
        - "Llamo servicio: /FuncionesYHorarios": realiza un POST al endpoint a la seccion de funciones y horarios de la pagina web a testear. 
        - "Llamo servicio: /Estrenos": realiza un POST al endpoint a la seccion de estrenos de la pagina web a testear. 

    Tests de IU: 
        -"Login Failed": realiza un logueo con credenciales incorrectas. 
        -"Login Correct":  realiza un logueo exitoso.

## URL:
    Tests de servicio: http://cinesgranrex.com.ar/
    Tests de UI: https://uat-tienda.claro.amx/catalogo/inicio#facet:&productBeginIndex:0&orderBy:6&pageView:grid&minPrice:&maxPrice:&pageSize:& 

## Comandos utiles:
    npx cypress open 
    ./node_modules/.bin/cypress open 
    