export function favouriteissue (){ 
    cy.wait(5000)
    cy.get('nav#sidebar div > a > img').click()
    cy.wait()
    cy.get('div#root button > div').type('{Enter}'    )
    cy.wait(2000)
    cy.get('[style="margin-top: 2px;"] > .scenario-dropdown-list-box > .scenario-name-list > .dropdown-item').click()
    cy.wait(2000)
    
}


