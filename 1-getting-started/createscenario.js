export function createscenario(){
    cy.get('div#root button > div').type('{Enter}'    )
    cy.wait(2000)
    cy.get('div#root div:nth-child(2) > li:nth-child(3) > a').click()
    cy.wait(2000)
//    cy.get('#inputScenarioName').type(userID_Alpha_Numeric())  
    
    cy.wait(2000)
   
    cy.get('.css-sb39jp').type('Base')
    cy.wait(2000)
    .get('.css-sb39jp').type(('{Enter}'))
  }
  
     