describe('Test RestfulBooker', () => {
  beforeEach(() => {
    // Visitamos la página principal con la opción para ignorar códigos de estado erróneos
    cy.visit('https://automationintesting.online/', { failOnStatusCode: false });
  });


  it('Navegar al panel de admin y loguearse con éxito', () => {
    cy.contains('a', 'Admin panel')
      .scrollIntoView()
      .should('be.visible')
      .click();
    cy.url().should('include', '/admin');
    cy.get('#username').type('admin');
    cy.get('#password').type('password');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/admin/rooms'); 

   
  });

});