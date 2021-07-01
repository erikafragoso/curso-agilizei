/// <reference types="cypress" />

describe('Listar', () => {
    context('Listagem', () => {
        it('Listagem de registros', () => {
            cy.server()
            cy.route({
                method: 'GET',
                url: '**/api/1/databases/userdetails/collections/newtable?**',
                status: 200,
                response: []
            }).as('getNewTable')
            cy.visit('/WebTable.html')

            cy.get('div[role=row]').should('have.length', 1)
        });

        it.only('Listagem com apenas um registro', () => {
            cy.server()
            cy.route({
                method: 'GET',
                url: '**/api/1/databases/userdetails/collections/newtable?**',
                status: 200,
                response: 'fx:webtable-get-unique'
            })
            cy.visit('/WebTable.html')
        });
    });
});