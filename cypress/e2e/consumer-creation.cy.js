describe("Consumer Creation", () => {
    
    beforeEach(() => {
        cy.visit("https://www.facebook.com/")
        cy.viewport(1920, 1080)
    })
    it('Registrarse', () => {
        cy.get('[data-testid="royal_email"]').type("brandon_2010.m@hotmail.com")
        cy.get('[data-testid="royal_pass"]').type("queso77")
        cy.get('#loginbutton').click()
        
        
    })
})