it('visits the app', () => {
  cy.visit('/')
})

describe('Home page', () => {
  it('should change display from 0 to 7', () => {
    cy.get('.components__CalcDisplay-sc-12po5x1-0').should(
      'have.text',
      '0',
    )
    cy.get('[data-formula="7"]').click()
    cy.get('.components__CalcDisplay-sc-12po5x1-0').should(
      'have.text',
      '7',
    )
  })

  it('should add plus symbol', () => {
    cy.get('.components__CalcDisplay-sc-12po5x1-0').should(
      'have.text',
      '7',
    )
    cy.get('[data-formula="+"]').click()
    cy.get('.components__CalcDisplay-sc-12po5x1-0').should(
      'have.text',
      '7+',
    )
  })

  it('should clear display', () => {
    cy.get('.components__CalcDisplay-sc-12po5x1-0').should(
      'have.text',
      '7+',
    )
    cy.get('[data-formula="clear"]').click()
    cy.get('.components__CalcDisplay-sc-12po5x1-0').should(
      'have.text',
      '0',
    )
  })

  it('should solve a simple example', () => {
    cy.get('.components__CalcDisplay-sc-12po5x1-0').should(
      'have.text',
      '0',
    )
    cy.get('[data-formula="2"]').click()
    cy.get('[data-formula="+"]').click()
    cy.get('[data-formula="2"]').click()

    cy.get('.components__CalcDisplay-sc-12po5x1-0').should(
      'have.text',
      '2+2',
    )
    cy.get('[data-type="calculate"]').click()
    cy.get('.components__CalcDisplay-sc-12po5x1-0').should(
      'have.text',
      '4',
    )
    cy.get(
      '.components__CalcHistory-sc-1fauqx-0 > :nth-child(2) > :nth-child(1)',
    ).should('have.text', '2+2')
  })

  it('should get infinity after divide by zero', () => {
    cy.get('.components__CalcDisplay-sc-12po5x1-0').should(
      'have.text',
      '4',
    )
    cy.get('[data-formula="clear"]').click()
    cy.get('.components__CalcDisplay-sc-12po5x1-0').should(
      'have.text',
      '0',
    )

    cy.get('[data-formula="2"]').click()
    cy.get('[data-formula="/"]').click()
    cy.get('[data-formula="0"]').click()
    cy.get('[data-formula="="]').click()

    cy.get('.components__CalcDisplay-sc-12po5x1-0').should(
      'have.text',
      'Infinity',
    )
  })

  it('should get NaN after incorrect expression with brackets', () => {
    cy.get('.components__CalcDisplay-sc-12po5x1-0').should(
      'have.text',
      'Infinity',
    )
    cy.get('[data-formula="clear"]').click()
    cy.get('.components__CalcDisplay-sc-12po5x1-0').should(
      'have.text',
      '0',
    )

    cy.get('[data-formula=")"]').click()
    cy.get('[data-formula="2"]').click()
    cy.get('[data-formula="+"]').click()
    cy.get('[data-formula="2"]').click()
    cy.get('[data-formula="("]').click()
    cy.get('[data-formula="="]').click()

    cy.get('.components__CalcDisplay-sc-12po5x1-0').should(
      'have.text',
      'NaN',
    )

    cy.get(
      '.components__CalcHistory-sc-1fauqx-0 > :nth-child(2) > :nth-child(3)',
    ).should('have.text', ')2+2(')
  })

  it('should solve expression with bracket', () => {
    cy.get('.components__CalcDisplay-sc-12po5x1-0').should(
      'have.text',
      'NaN',
    )
    cy.get('[data-formula="clear"]').click()
    cy.get('.components__CalcDisplay-sc-12po5x1-0').should(
      'have.text',
      '0',
    )

    cy.get('[data-formula="("]').click()
    cy.get('[data-formula="2"]').click()
    cy.get('[data-formula="+"]').click()
    cy.get('[data-formula="2"]').click()
    cy.get('[data-formula=")"]').click()
    cy.get('[data-formula="*"]').click()
    cy.get('[data-formula="2"]').click()
    cy.get('[data-formula="="]').click()

    cy.get('.components__CalcDisplay-sc-12po5x1-0').should(
      'have.text',
      '8',
    )

    cy.get(
      '.components__CalcHistory-sc-1fauqx-0 > :nth-child(2) > :nth-child(4)',
    ).should('have.text', '(2+2)*2')
  })
})
