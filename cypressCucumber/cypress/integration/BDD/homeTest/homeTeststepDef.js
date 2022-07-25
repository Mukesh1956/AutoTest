/// <reference types="Cypress" />
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps"; // have to import these, so that cypress can recognise cucumber keywords

Given("We visit pokerstarssports Website", function(){ // we can make an anonymus function as well here, use "()=>" instead of function() 
cy.visit("https://www.pokerstarssports.uk")
})
And("click on Accept button",function(){
    cy.wait(10000)
    cy.get('#onetrust-accept-btn-handler').invoke('show')
    cy.contains('Accept All Cookies').click()
})

When("We Navigate to pokerstarssports site",()=>{
  cy.wait(1000)
  cy.scrollTo(0, 1000) // Scroll the window 500px down
})

And("check FootBall Grid is present",function(){
    cy.get('#highlights__prematch__sport__soccer > .activeWrapper').should('have.text', 'Football')
})

And("Add the one match results",function(){
    cy.get('#highlights-primary').find('li').first().each((item,index,list)=> {
    //First list can be added
   cy.get('[id*=”event-schedule-selection-”]> .button__bet__odds').eq(1).click();
  })
   Then("verify added to the Bet slip",function(){
      cy.get('.icon-betslip').click()
      const $el = cy.get('.remove > .icon-remove')
     if ($el.length > 0) {
      console.log("Added to the list pass")
     }
     else{
      console.log("Failed to Addto the list pass")
     }

    })
    And("Remove the added match results",function(){
      cy.get('#highlights-primary').find('li').first().each((item,index,list)=> {
     cy.get('#event-schedule-selection-5356109619 > .button__bet__odds').click()
    })
})
Then("verify removed from the Bet slip",function(){
  cy.get('.icon-betslip').click()
  const $el =  cy.get('#bets-singles > .singleBetView > .noBets')
 if ($el.length = 0) {
  console.log("successfully removed from the Bet slip")
 }
 else{
  console.log("Failed removed from the Bet slip")
 }

})

  
})
   

   

