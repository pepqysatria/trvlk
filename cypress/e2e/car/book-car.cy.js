/// <reference types="cypress" />

import POM from "../../pom/pom"
import moment from "moment";

describe('Car Rental', () => {
  beforeEach(() => {
    cy.viewport('macbook-16');
    cy.visit('https://www.traveloka.com/en-id')
    
  })

  it('Successfully book car rental', () => {
    POM.carRentalMenu().click({force: true});
    POM.withoutDriverPill().should('have.text','Without Driver');
    POM.rentalLocationSearchField().type('Jakarta',{force: true});
    cy.wait(2000);
    POM.setRentalLocationList().click({force:true});
    const startDate = moment().add('2','days').format('DD-M-YYYY');
    POM.rentalStartDate().click({force:true})
    POM.setDate(startDate).first().click({force:true});
    const endDate = moment().add('5','days').format('DD-M-YYYY');
    POM.rentalEndDate().click({force: true});
    POM.setDate(endDate).last().click({force:true});
    POM.searchButton().click({force:true});
    cy.wait(3000);
    POM.carSelectionButton().click({force:true});
    POM.carSelectionVendorButton().click({force:true});
    cy.wait(2000);
    POM.pickUpLocationRadioBtn().first().scrollIntoView();
    POM.pickUpLocationRadioBtn().first().click({force:true});
    cy.wait(1000);
    POM.setPickUpLocationList().click({force:true});
    cy.wait(2000);
    POM.dropOffLocationRadioBtn().last().click({force:true});
    POM.setDropOffLocationField().last().click().type('Jakarta{enter}')
    POM.setDropdownLocationList().last().click({force:true});
    cy.wait(1000);
    POM.notesField().type('Notes is Optional');
    POM.continueBtn().click();

  })
})
