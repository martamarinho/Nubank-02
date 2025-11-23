describe('Login', () => {
    it('Login com sucesso', () => {
        cy.visit('https://www.nubank.com.br/nu/conta')
        cy.wait(4000)
        cy.get('#cpf').type('52265580155')
        cy.get('.css-dvxtzn > .chakra-button').click()
        cy.get('#name').type('Maria Reis')
        cy.get('#phone').type('77991929394')

    });
    
});