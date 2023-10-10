export function rollback(){
    cy.wait(9000)
 cy.get('a#rollmodelDropdown > span').click()

 cy.wait(5000)
 cy.get('div#root i.fas.fa-chevron-left').click()
 cy.get('div#root div.modal.display-block > section > div.mt-4.d-inline-block.w-100 > div > button.btn.mymodalbtn_save.float-right').click()
// cy.wait(9000)

}

