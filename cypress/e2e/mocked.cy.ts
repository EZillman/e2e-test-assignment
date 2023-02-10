beforeEach(() => {
    cy.visit('/');
  });

describe('searching for mocked movies', () => {
    it('should request from the right url', () => {
        cy.intercept('GET', 'http://omdbapi.com/?apikey=416ed51a&s=*', {fixture: 'omdbResponse'}).as('omdbResponse');

        cy.get('input#searchText').type('bella').should('have.value', 'bella');

        cy.get('button#search').click();

        cy.wait('@omdbResponse').its('request.url').should('contain', 'bella');
    });

    it('should search for mocked movies', () => {
        cy.intercept('GET', 'http://omdbapi.com/?apikey=416ed51a&s=*', {fixture: 'omdbResponse'}).as('omdbResponse');

        cy.get('input#searchText').type('bella').should('have.value', 'bella');

        cy.get('button#search').click();
    });

    it('should find mocked movies and create correct elements', () => {
        cy.intercept('GET', 'http://omdbapi.com/?apikey=416ed51a&s=*', {fixture: 'omdbResponse'}).as('omdbResponse');
        
        cy.get('input#searchText').type('bella').should('have.value', 'bella');

        cy.get('button#search').click();

        cy.get('div.movie').should('exist');
        cy.get('div.movie > h3').should('exist');
        cy.get('div.movie > h3:first').contains('Bella').should('exist');
        cy.get('div.movie > img').should('exist');
    });
  
  });

  describe('trying to submit empty input', () => {
    it('should get error', () => {
        cy.intercept('GET', 'http://omdbapi.com/?apikey=416ed51a&s=*', {fixture: 'omdbEmpty'}).as('omdbEmpty');
        
        cy.get('input#searchText').type(' ').should('have.value', ' ');

        cy.get('button#search').click();
        
        cy.get('p').contains('Inga sökresultat att visa').should('exist');
    });
  
  });
  
  