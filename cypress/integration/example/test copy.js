describe('My Second Test Suite', () => {
    it('My Second Test', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4).then(function()
        {
          console.log('nice job')
        })
       
        //Parent-CHild chaining
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)

        //cy.get('.products').find('.product').eq(3).contains('Capsicum').click()

        cy.get('.products').find('.product').each(($el, index, $list)=> {
          const textVeg=$el.find('h4.product-name').text()
          if(textVeg.includes('Cashews')) 
          {
            cy.wrap($el).find('button').click()
          }
        }
      )

      cy.get('.cart-icon > img').click()
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.contains('Place Order').click()

      expect(true).to.equal(true)
    })
  })