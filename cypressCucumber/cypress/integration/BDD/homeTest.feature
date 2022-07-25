Feature: Adding things to, and removing things from, the bet slip

    Selected Two Four FootBall match result in the Grid 
    
    Scenario: Verify FootBall Grid and Add two FootBall match result in Grid
        Given We visit pokerstarssports Website
        And click on Accept button
        When We Navigate to pokerstarssports site 
        And check FootBall Grid is present 
        And Add the one match results
        Then verify added to the Bet slip
       
    Scenario: Remove Selected FootBall match from Grid
      Given We visit pokerstarssports Website
        And click on Accept button
       When We Navigate to pokerstarssports site 
       And check FootBall Grid is present 
      And Add the one match results
      And Remove the added match results
      Then verify removed from the Bet slip

   