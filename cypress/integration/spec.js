/// <reference types="cypress" />
describe('Test', () => {

  beforeEach(() => {
    const url = 'http://localhost:8888';
    cy.visit(url);
  });

  it('has Date element', () => {
    cy.get('#date')
      .should('be.visible')
      .and('not.be.empty');
  });

  it('has Data element', () => {
    cy.get('#data')
      .should('be.visible')
      .and('not.be.empty');

    cy.get('#data').should('contain.text', 'China');
    cy.get('#data').should('contain.text', 'Korea');
  });

})