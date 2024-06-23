export default class POM {
    static carRentalMenu(){
        return cy.get('[data-testid="product-pill-Car Rental"]');
    }
    static withoutDriverPill(){
        return cy.get(':nth-child(1) > .r-1h84pjw > .r-1awozwy > .css-4rbku5');
    }
    static rentalLocationSearchField(){
        return cy.get('[data-testid="rental-search-form-location-input"]')
    }
    static setRentalLocationList(){
        return cy.get('[aria-label="Jakarta"] > .r-1wbh5a2 > [data-testid="rental-search-form-location-item-title"] > span')
    }
    static rentalEndDate(){
        return cy.get('[data-testid="rental-search-form-date-input-end"]');
    }
    static rentalStartDate(){
        return cy.get('[data-testid="rental-search-form-date-input-start"]');
    }
    static setDate(date){
        return cy.get(`[data-testid="date-cell-${date}"]`);
    }
    static searchButton(){
        return cy.get('[data-testid="rental-search-form-cta"] > .css-1dbjc4n');
    }
    static carSelectionButton(){
        return cy.get(':nth-child(1) > .r-14lw9ot > .r-ymttw5 > .r-obd0qt > .r-173mn98 > .css-18t94o4');
    }
    static carSelectionVendorButton(){
        return cy.get(':nth-child(5) > .r-nsbfu8 > .r-13awgt0.r-17s6mgv > .r-1wzrnnt > .css-18t94o4');
    }
    static carSelectionProductDetailBtn(){
        return cy.get('.r-14qw7yl > :nth-child(1) > .css-18t94o4 > .css-1dbjc4n');
    }
    static pickUpLocationRadioBtn(){
        return cy.get('.r-1loqt21 > .r-18u37iz > .r-88pszg > .r-1awozwy > .r-1naam9t')
    }
    static setPickUpLocationList(){
        return cy.get(':nth-child(1) > .r-1wtj0ep > .r-13awgt0 > .r-1loqt21 > .r-18u37iz > .r-1awozwy.r-1472mwg > .r-1awozwy > .r-1naam9t');
    }
    static dropOffLocationRadioBtn(){
        return cy.get('.r-1loqt21 > .r-18u37iz > .r-88pszg')
    }
    static setDropOffLocationField(){
        return cy.get('.r-391gc0 > .r-184en5c > :nth-child(2) > :nth-child(1) > .r-u4s1nx > .css-11aywtz')
    }
    static setDropdownLocationList(){
        return cy.get('.r-1wbh5a2 > [data-testid$="-title"]')
    }
    static notesField(){
        return cy.get('.r-1awozwy > .css-11aywtz');
    }
    static continueBtn(){
        return cy.get('.r-173mn98 > .css-18t94o4');
    }
}
