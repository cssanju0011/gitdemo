export function mod(){
    cy.wait(10000)
   // cy.contains('Create a Model').click({force: true})
    cy.get('img span#creat-mdl').type('{Enter}')
    cy.wait(2000)
    
}
