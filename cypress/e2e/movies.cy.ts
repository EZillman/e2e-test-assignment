beforeEach(() => {
  cy.visit('/');
});

describe('input field', () => {
  it('should check for input', () => {
    cy.get('input#searchText').should('exist');
  });

  it('should check if input works', () => {
    cy.get('input#searchText').type('chocolate').should('have.value', 'chocolate');
  });

});

describe('submit button', () => {
  it('should check for submit button', () => {
    cy.get('button#search').should('exist');
  });

});

describe('searching for movies', () => {
  it('should find movies', () => {
    cy.get('input#searchText').type('chocolate').should('have.value', 'chocolate');

    //cy.get('button#search').click();
  });

});

describe('trying to submit empty input', () => {
  it('should get error', () => {
    cy.get('input#searchText').type(' ').should('have.value', ' ');

    cy.get('button#search').click();

    cy.get('p').contains('Inga sökresultat att visa').should('exist');
  });

});