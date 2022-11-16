describe("Test suite - conjunto de pruebas", () => {

    beforeEach(() => {
        //Acciones a realizar para cada una de las pruebas, reduce repeticion de instrucciones.
        cy.visit("http://zero.webappsecurity.com")
    })

    it("Validar elementos home page", () => {

        //Indico elemento html y accion a realizar con dicho elemento, ej: validar que este visible la img
        cy.get('.active > img').should("be.visible")
        //valido visibilidad del texto
        cy.get('.active > .custom > p').contains("Welcome to Zero Online Banking.")
    })

    it("Prueba E2E - transferencia bancaria", () => {

        cy.get('#signin_button').click()
        cy.get('#user_login').type("username")
        cy.get('#user_password').type("password")
        cy.get('.btn').click()
        cy.get('#transfer_funds_tab > a').click()
        cy.get('#tf_fromAccountId').select("1")
        cy.get('#tf_toAccountId').select("5")
        cy.get('#tf_amount').type("300" + 1)
        cy.get('#tf_description').type("Transferencia de prueba")
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
        cy.get('.alert').contains("You successfully submitted your transaction.")


    })

    //Agregar .only para que Cypress corra unicamente la prueba seleccionada
    it("Visualizar actualizacion de grafico", () => {

        cy.visit("http://zero.webappsecurity.com")
        cy.get('#signin_button').click()
        cy.get('#user_login').type("username")
        cy.get('#user_password').type("password")
        cy.get('.btn').click()
        cy.get('#money_map_tab > a').click()
        cy.get('#ext-sprite-1259').should("be.visible")
        cy.get('#ext-sprite-1167 > tspan').click()
        cy.get('#ext-sprite-1259').should("not.visible")

    })


})