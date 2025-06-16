describe('Handling Child Windows', () => {
    it('Should handle child windows', () => {
        cy.visit(Cypress.env('url') + "/AutomationPractice/");
        cy.get('#opentab').then(function(el)
        {
            const url = el.prop('href')
            cy.visit(url)
            cy.origin(url, ()=> 
            {
                cy.get("div.sub-menu-bar a[href*='about']").click()
            }
                
            )

        })
       

    })

   
})