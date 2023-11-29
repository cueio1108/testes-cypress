/// <reference types="cypress" />

describe('Testes para a pagina de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app')
    })

    it('Deve levar o usuario até o formulario de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscricao')
    })

    it('Deve preecher o formulario de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Miguel Leal')
        cy.get('input[name="email"]').type('miguel@leugim.com')
        cy.get('input[name="telefone"]').type('11 123456789')
        cy.get('input[name="endereco"]').type('Rua dos bobos, N°0')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"]').select('Outros')
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })

        cy.screenshot('tela-inscricao-preenchido')
    })
})