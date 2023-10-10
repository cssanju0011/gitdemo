   export function createdashboard(){
       cy.wait(9000)
    cy.get('div#root div:nth-child(3) > div.create-new-button.position-relative.cursor-pointer > img').click()
  
    cy.wait(5000)
    cy.get('div#root div.create-new-button-dropdown > ul > li:nth-child(2)').click()
    cy.get('.mt-2 > input').click()
   // cy.wait(9000)
    cy.get('.mt-2 > input').type(userID_Alpha_Numeric())
    cy.get('.mt-4 > .mymodalbtn_save').click()

  }
  
  function userID_Alpha_Numeric() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 2; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    text = "dashboard_" + text;
  
    return text;
  }