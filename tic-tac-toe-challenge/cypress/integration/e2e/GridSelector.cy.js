/* global cy */
describe('GridSelector Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); 
  });

  it('should render the GridSelector component', () => {
    cy.get('.container.mt-3').should('be.visible');
  });

  it('should change the grid size when a different option is selected', () => {
    cy.get('#gridSelector').select('3');
    cy.get('#gridSelector').should('have.value', '3');

    cy.get('#gridSelector').select('6');
    cy.get('#gridSelector').should('have.value', '6');

    cy.get('#gridSelector').select('9');
    cy.get('#gridSelector').should('have.value', '9');
  });
});
