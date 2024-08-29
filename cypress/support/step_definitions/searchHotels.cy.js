/// <reference types="cypress" />
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import regPage from "../../pageObject/RegistrationPage/registrationPage.cy";
import hotelPage from "../../pageObject/HotelPage/hotelPage.cy";

Given("User navigate to Traveloka website", () => {
    regPage.navigateURL();
})

When("User navigate to hotels section", () =>{
    regPage.navigateToHotelPage();
})

When("User search for hotels located in Bandung", () =>{
    hotelPage.enterHotelsLocation();
})

When("User select hotel location result", () =>{
    hotelPage.selectHotelsLocationResult();
})

When("User set the check-in date to the current date plus 7 days", () =>{
    hotelPage.clickCheckInCheckOutDateField();
    hotelPage.selectCheckInDate();
})

When("User set the duration to 1 night", () =>{
    hotelPage.selectDurationOfStay();
})

When("User set the number of Guests to 2 in the adult field", () =>{
    hotelPage.clickGuestOccupancy();
    hotelPage.verifyAdultOccupancy();
})

Then("User click the Search Hotels button", () =>{
    hotelPage.clickSearchSubmit();    
})

When("Validate that the hotel location is in Bandung", () =>{
    hotelPage.verifyHotelLocation();
})