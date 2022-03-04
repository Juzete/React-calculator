it('visits the app', () => {
  cy.visit('/')
})

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('it check loader', () => {
    cy.get('svg').should('be.visible')
  })

  it('it check welcome title', () => {
    cy.get('#welcome')
      .should('be.visible')
      .contains('Welcome!')
  })
})
