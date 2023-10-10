export function deletemodel(){
    cy.get('div#root button[type="button"]').type('{Enter}'    )
    cy.wait(2000)
    cy.get('div#root div.mod-header > ul > li:nth-child(2)').click()
    cy.wait(2000)
    cy.get('div#root div.modal.display-block > section > div.my-2.p-2.w-100.custom-modal-footer > button.btn.mymodalbtn_save.float-right.mr-3').click()
    cy.wait(2000)
}