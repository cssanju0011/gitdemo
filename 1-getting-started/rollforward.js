   export function rollforward(){
      cy.get('ul#accordionExample li.menu.bg-white.menuwithdots.menutocollapse > a').type('{Enter}'    )
    
    cy.wait(9000)
    cy.get('ul#function0 div:nth-child(1) > li > a').type('{Enter} ') //sheet select
    cy.wait(3000)
    cy.wait(9000)
 cy.get('a#rollmodelDropdown > span').click()

 cy.wait(5000)
 cy.get('div#root i.fas.fa-chevron-right').click()
 cy.get('div#root div.modal.display-block > section > div.mt-4.d-inline-block.w-100 > div > button.btn.mymodalbtn_save.float-right').click()
// cy.wait(9000)

}

