export function createcube(){
    cy.wait(9000)
 cy.get('a#dataIntegration > img').click() // click on database manager
cy.wait(5000)
 //click on 
 cy.get('div#content button').click()
 //click on  
 cy.get('div#content input').type('cube1')
 cy.get('div#content button.btn.mymodalbtn_save.btn-impt-stay.pl-0.pb-0.float-right').click()
}