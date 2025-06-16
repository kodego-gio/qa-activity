import HomePage from '../../support/pageObjects/HomePage';

describe('E-commerce End-to-End Test', () => {
    beforeEach(function() {
        //runs once before each test in the block
        cy.fixture('example').then(function(data) 
        {
            this.data = data;
            this.homepage = new HomePage();
        }
        );
    }); 
    it('Submit Order', function() {
       const productName = this.data.productName;
       
       this.homepage.goTo("https://rahulshettyacademy.com/loginpagePractise/#");
       const productPage = this.homepage.login(this.data.username, this.data.password);

       productPage.pageValidation();
       productPage.getCardCount().should('have.length', 4);
       productPage.selectProduct(productName);
       //productPage.selectFirstProduct();

       const cartPage = productPage.gotoCart();
       cartPage.sumOfProducts().then((sum) => 
        {
            expect(sum).to.be.lessThan(200000)
        })

     

        const confirmationPage = cartPage.checkoutItems();
        confirmationPage.submitFormDetails()
        confirmationPage.getAlertMessage().should("contain", "Success");    


});
});