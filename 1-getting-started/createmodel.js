export function createmodel(){
    cy.get('div#root button[type="button"]').type('{Enter}'    )
    cy.wait(2000)
    cy.get('span#creat-mdl').click()
    cy.wait(2000)
    cy.get('input#inputModelName').type(userID_Alpha_Numeric())  
    
    cy.wait(9000)
    cy.get('section#modal-vmain div:nth-child(2) > div.react-datepicker-wrapper > div > input').click()
    cy.get('section#modal-vmain div.react-datepicker__month-text.react-datepicker__month-0').click()
    cy.get('section#modal-vmain div:nth-child(3) > div.react-datepicker-wrapper > div > input').click()
    cy.get('section#modal-vmain div.react-datepicker__month-text.react-datepicker__month-3').click()
    cy.get('section#modal-vmain div:nth-child(5) > div.react-datepicker-wrapper > div > input').click()
    cy.get('section#modal-vmain div.react-datepicker__month-text.react-datepicker__month-11').click()
  //  cy.get('section#modal-vmain div.css-1hwfws3.custom-scrollbar__value-container.custom-scrollbar__value-container--has-value').click()
    //cy.get('#react-select-3-option-3').click()
    cy.get('section#modal-vmain button.btn.mymodalbtn_save.float-right.mr-3').click()
}

export function userID_Alpha_Numeric(Name_App) {
    var text = Name_App+"";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
    for (var i = 0; i < 2; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    //text =  text;
 
    return text;
  }