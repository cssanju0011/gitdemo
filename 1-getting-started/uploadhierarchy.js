export function uploadhierarchy(){
    cy.wait(9000)
 cy.get('a#dataIntegration > img').click() // click on database manager
cy.wait(5000)
 //click on upload button
 cy.get('div#content div.dh-header-all-btn.d-flex.align-items-center > div:nth-child(2) > button').click()
 //click on upload hierarchy 
 cy.get('div#content li:nth-child(2)').click()



 cy.get('input#Import-mdl-fileUpload').selectFile('cypress/fixtures/food_hierarchy.csv') //attach file
 cy.wait(5000)
 cy.get('div#content button.btn.mymodalbtn_save2.float-right.minWidth100').click() //click on import button
cy.screenshot()
}
