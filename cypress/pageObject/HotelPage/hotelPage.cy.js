import dayjs, { Dayjs } from "dayjs";

class HotelPage {

    element = {
        htlHotelPage: 'div[data-testid="product-nav"]',
        htlEnterHotelsLocation: 'input[data-testid="autocomplete-field"]',
        htlHotelsResult: 'div[data-testid="autocomplete-item-name"]',
        htlClickCheckInDate: 'input[data-testid="check-in-date-field"]',
        htlCheckInDate: 'div[data-testid="date-cell-6-9-2024"]',
        htlDuration: 'input[data-testid="duration-field"]',
        htlDurationDropdownSelection: 'div[data-testid="dropdown-menu-item"]',
        htlGuestOccupancy: 'input[data-testid="occupancy-field"]',
        htlAdultOccupancyValue: '#__next > div:nth-child(5) > div.css-1dbjc4n.r-ywje51.r-1jgb5lz.r-4u6olh.r-uwe93p > div > div.css-1dbjc4n.r-nsbfu8 > div > div:nth-child(5) > div.css-1dbjc4n.r-1e081e0.r-1dgsx37.r-tqpus0 > div > div.css-1dbjc4n.r-tqpus0 > div.css-1dbjc4n.r-14lw9ot.r-kdyh1x.r-rs99b7.r-1d2f490.r-bztko3.r-u8s1d.r-j76wpu > div > div > div:nth-child(1) > div.css-1dbjc4n.r-1awozwy.r-xoduu5.r-18u37iz',
        htlSearchSubmit: 'div[data-testid="search-submit-button"]',
        htlVerifyHotelLocation: 'div[data-testid="tvat-hotelLocation"]'
    }

    

    enterHotelsLocation() {
        cy.get(this.element.htlEnterHotelsLocation, {timeout: 10000}).should('be.visible')
        .click({force: true}).type('Bandung')
        return this;
    }

    selectHotelsLocationResult() {
        cy.get(this.element.htlHotelsResult)
        .find('span')
        .contains('Bandung')
        .click();
        return this;
    }
    clickCheckInCheckOutDateField() {
        cy.get(this.element.htlClickCheckInDate).click();
        return this;
    }

    selectCheckInDate() {
        cy.get(this.element.htlCheckInDate)
        // .parent()
        // .find('div')
        // .contains("date-cell-"+dayjs().add(7,"d").format("D-M-YYYY"))
        .click({force: true});
        return this;
    }

    clickDurationOfStay() {
        cy.get(this.element.htlDuration).click();
        return this;
    }

    selectDurationOfStay() {
        cy.get(this.element.htlDurationDropdownSelection)
        .find('div')
        .contains('1 night')
        .click();
        return this;
    }

    clickGuestOccupancy() {
        cy.get(this.element.htlGuestOccupancy).click();
        return this;
    }

    verifyAdultOccupancy() {
        cy.get(this.element.htlAdultOccupancyValue, {timeout: 10000})
        .invoke('text')
        .should('equal', '2');
        return this;
    }

    // selectGuestOccupancy() {
    //     cy.get(this.element.htlAdultOccupancy)
    //     .find('svg')
    //     .contains('[data-id="IcSymbolAddPlus16"]')
    //     .click();
    //     return this;
    // }

    clickSearchSubmit() {
        cy.get(this.element.htlSearchSubmit).click();
        return this;
    }

    verifyHotelLocation() {
        cy.get(this.element.htlVerifyHotelLocation)
        .invoke('text')
        .should('contain','Bandung');
    }
}
const hotelPage = new HotelPage();
export default hotelPage;