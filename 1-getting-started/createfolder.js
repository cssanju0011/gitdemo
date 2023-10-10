export function createfolder(){
    cy.wait(9000)
 cy.get('div#root div:nth-child(3) > div.create-new-button.position-relative.cursor-pointer > img').click()

 cy.wait(5000)
 cy.get('.create-new-button-dropdown > .list-unstyled > :nth-child(6)').click()
 cy.get('div#root div.adddashboard_createbtn > div > input[type="text"]').click()
// cy.wait(9000)
 cy.get('div#root div.adddashboard_createbtn > div > input[type="text"]').type(userID_Alpha_Numeric())
 cy.get('div#root button[type="button"].btn.mymodalbtn_save.float-right').click()

}

function userID_Alpha_Numeric() {
 var text = "";
 var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

 for (var i = 0; i < 2; i++)
   text += possible.charAt(Math.floor(Math.random() * possible.length));

 text = "Folder_" + text;

 return text;
}