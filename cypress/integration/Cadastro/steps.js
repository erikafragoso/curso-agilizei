
let Chance = require('chance')
let chance = new Chance()

When(/^informar meus dados$/, () => {
	cy.get('input[ng-model^="First"]').should('be.visible').type(chance.first())
    cy.get('input[ng-model^="Last"]').should('be.visible').type(chance.last())
    cy.get('input[ng-model^="Email"]').should('be.visible').type(chance.email())
    cy.get('input[ng-model^="Phone"]').should('be.visible').type(chance.phone({ formatted: false} ))
    cy.get('input[value=FeMale]').check()
    cy.get('input[type=checkbox]').check('Cricket')
    cy.get('input[type=checkbox]').check('Movies')
    cy.get('select#Skills').select('Javascript')
    cy.get('select#countries').select('Brazil')
    cy.get('select#country').select('India', { force: true })
    cy.get('select#yearbox').select('1991')
    cy.get('select[ng-model^=month]').select('August')
    cy.get('select#daybox').select('30')
    cy.get('input#firstpassword').type('Teste@2021')
    cy.get('input#secondpassword').type('Teste@2021')
    cy.get('input#imagesrc').attachFile('imagem-foto.png')
});

When(/^salvar$/, () => {
	cy.get('button#submitbtn').click();
});

Then(/^deve cadastrar com sucesso$/, () => {
    // cy.wait('@postNewTable').then((responseNewTable) =>{
    //     expect(responseNewTable.status).to.eq(200)
    // })

    // cy.wait('@getNewTable').then((responseGetNewTable) =>{
    //     expect(responseGetNewTable.status).to.eq(200)
    // })

    // cy.url().should('contain', '**/WebTable')
});
