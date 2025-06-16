import ProductPage from '../../support/pageObjects/ProductPage';
const url = "https://rahulshettyacademy.com/loginpagePractise/#"; 



class HomePage {

    goTo() {
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/#');
    }
    
    login (username, password) {
       cy.get("#username").type(username);
       cy.get("#password").type(password);
       cy.contains("Sign In").click();
       return new ProductPage();
    }
}
export default HomePage;