it('visits the app', () => {
  cy.visit('/')
})

describe('Setting page', () => {
  it('should go to the setup page', () => {
    cy.get(
      '[href="#/settings"] > .components__Navigation-sc-t1fcg3-3',
    ).click()
    cy.get(
      '.components__SettingsTittle-sc-spdf8s-1',
    ).should('have.text', 'Settings')
  })

  it('should switch theme', () => {
    cy.get('.components__Header-sc-t1fcg3-2').should(
      'have.css',
      'background-color',
      'rgb(0, 0, 0)',
    )

    cy.get('.components__Select-sc-kj845z-0').select(
      'Dark Theme',
    )

    cy.get('.components__Header-sc-t1fcg3-2').should(
      'have.css',
      'background-color',
      'rgb(255, 255, 255)',
    )
  })

  it('should clear all history', () => {
    cy.get('.components__ResetButton-sc-tq475a-0').click()
    cy.get(
      '[href="#/"] > .components__Navigation-sc-t1fcg3-3',
    ).click()
    cy.get('.components__CalcHistory-sc-1fauqx-0').should(
      'have.length',
      1,
    )
  })
})
