/// <reference types="cypress" />

Given(/^que o site não possui registros$/, () => {
    cy.server()
    cy.route({
        method: 'GET',
        url: '**/api/1/databases/userdetails/collections/newtable?**',
        status: 200,
        response: []
    }).as('getNewTable')
});

When(/^acessar a listagem$/, () => {
    cy.visit('/WebTable.html')
});

Then(/^devo visualziar a listagem vazia$/, () => {
	cy.get('div[role=row]').should('have.length', 1)
});


Given(/^que o site possui apenas um registro$/, () => {
	cy.server()
    cy.route({
        method: 'GET',
        url: '**/api/1/databases/userdetails/collections/newtable?**',
        status: 200,
        response: 'fx:webtable-get-unique'
    })
});

Then(/^devo visualizar apenas um registro$/, () => {
	
});
