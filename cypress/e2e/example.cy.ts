// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains(':nth-child(1) > .details > h3', 'Documentation')
  })
})
