Describe("Localizar elementos - diferentes metodos", () => {

    it("Clases, Id, Atributos, Arrays", () => {

        cy.visit("http://zero.webappsecurity.com")
        //Localizador por atributo "name=boton-siguiente"
        //Se coloca tipo de elemento HTML (img - label - div - input -etc) y nombre del atributo
        cy.get('input[name="name=boton-siguiente"]')
        //Puedo colocar en el atributo .clases o #id
        cy.get('input[id="user_email_login"]')
        cy.get('input[class="user_email"]')
        //Tomar todos los elementos que comparten una misma clase *
        cy.get('[class*=”react-class”]') 
        //Tomar todos los elementos de una clase que empiecen con un determinado valor ^
        cy.get('[class^=”react-class”]')
        //Tomar todos los elementos de una clase que terminen con un determinado valor $
        cy.get('[class$=”react-class”]')
        //Seleccionar primer elemento de lista de elementos iguales
        cy.get('.msg-body').first()
        //Seleccionar ultimo elemento de lista de elementos iguales
        cy.get('.msg-body').last()
        //Seleccion por index cuando tengo elementos iguales 
        cy.get('.msg-body').eq(2)
        //encontrar elemento html por atributo, con el texto, con orden de aparicion y realizar una accion
        cy.get('a:contains("Forgot passoword")').first().click()
        //encontrar elemento por texto. Ej: elemento con el texto "Sign In"
        cy.contains('Sign In')
    })

    it("Localizando con Xpath - traer una lista de elementos", () => {
        //Colocar siempre al comienzo "require('cypress-xpath')"
        cy.xpath('//ul[@class="todo-list"]//li').should('have.length', 3)
        //traer de manera especifca elementos por Xpath
        cy.xpath('//ul[@class="todo-list"]').xpath('./li').should('have.length', 3)  
    })

    it("Localizando con Funciones", () => {
        cy.get('#my_ele').next();
        cy.get('#my_ele').next('input');
        cy.get('#my_ele').prev();
        cy.get('#my_ele').nextAll();
        cy.get('#my_ele').prevAll();
        //Buscar elementos dentro de una seccion especifica(Formularios, headers, footers,etc)
        cy.get('form').within(($form) => {
        cy.get('input[name="email"]').type('eaxample@email.com')
        cy.get('input[name="password"]').type('mypassword')
        cy.root().submit()
        })
    })
})

