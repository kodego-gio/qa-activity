describe('My Second Test Suite', () => {
    it('My Second Test', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice");

        //Checkboxes
        // cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        // cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        // cy.get('input[type="checkbox"]').check(['option2','option3'])

        //Not Open in New Tab
        cy.get('#opentab').invoke('removeAttr','target').click()

        //Open in New Tab
        //cy.get('#opentab').click()

        cy.origin("https://www.qaclickacademy.com/",()=>
        {
          cy.get("#navbarSupportedContent a[href*='about']").click();
        })
        // {

        //cy.get('#alertbtn').click()
        //cy.get('value="Alert"]').click()
        //Windows Alert
        // cy.on('window:alert',(str)=>
        // {
        //     expect(str).to.equal('Hello , share this practice page and share your knowledge')
        // })
        //COnfirm Alert
        // cy.get('#confirmbtn').click()
        // cy.on('window:confirm',(str)=>
        //   {
        //       expect(str).to.equal('Hello , Are you sure you want to confirm?')
        //   })

        //Static Dropdown
        //cy.get('select').select('option2').should('have.value','option2')

        //Dynamic Dropdown
        // cy.get('#autocomplete').type('ind')
        // cy.get('.ui-menu-item div').each(($el, index, $list)=>{
        //   if($el.text()==="India")
        //   {
        //     $el.click()
        //   }
        // })

        //Autocomplete
        // cy.get('#autocomplete').should('have.value','India')
        // cy.get('#displayed-text').should('be.visible')
        // cy.get('#hide-textbox').click()
        // cy.get('#displayed-text').should('not.be.visible')
        // cy.get('#show-textbox').click()
        // cy.get('#displayed-text').should('be.visible')

        //Radio buttons
        //cy.get('[value="radio2"]').check().should('be.checked')

  })
})