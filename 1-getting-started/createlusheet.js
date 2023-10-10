export function createlusheet (){
    cy.get(':nth-child(1) > .dropdown-toggle > .menu_addcreatenew').type('{Enter}'    )
    cy.get('section#newsheet-modalsidebar div:nth-child(3) > div:nth-child(3) > label').type('{Enter}' )
    cy.wait(2000)
    cy.get('section#newsheet-modalsidebar div.newsheetm-menuright > input[type="text"]').type(userID_Alpha_Numeric())  
    
    cy.wait(2000)
    cy.get('section#newsheet-modalsidebar button.btn.mymodalbtn_save.float-right').click()
  }
  
  function userID_Alpha_Numeric() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 2; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    text = "sheet_" + text;
  
    return text;
  }