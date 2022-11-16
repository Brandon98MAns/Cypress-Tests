describe("Test suite - conjunto de pruebas", () => {


    it("Nombre de la prueba1", () => {

        //Indico sitio donde vamos a trabajar
        cy.visit("http://zero.webappsecurity.com")
        //Indico elemento html y accion a realizar con dicho elemento, ej: validar que este visible la img
        cy.get('.active > img').should("be.visible")
        //valido visibilidad del texto
        cy.get('.active > .custom > p').contains("Welcome to Zero Online Banking.")
    })

    it("Nombre de la prueba2", () => {
        
    })

    it("Nombre de la prueba3", () => {
        
    })


})