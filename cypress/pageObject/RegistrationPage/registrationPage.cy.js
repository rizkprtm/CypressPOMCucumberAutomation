class RegistrationPage {

    element = {
        regHotelPage: 'div[data-testid="product-nav"]',
    }

    navigateURL() {
        cy.visit('https://www.traveloka.com/en-id');
        cy.url().should('contain','traveloka');
    }

    navigateToHotelPage() {
        cy.get(this.element.regHotelPage)
        .find('div')
        .contains('Hotels')
        .click();
        return this;
    }
}
const regPage = new RegistrationPage();
export default regPage;