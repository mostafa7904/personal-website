context('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('goes to home page', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  })
})
