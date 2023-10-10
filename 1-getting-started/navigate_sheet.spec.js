export function navigate_sheet(){
   // cy.get('ul#accordionExample li.menu.bg-white.menuwithdots.menutocollapse > a').type('{Enter}'    )
    
    cy.wait(9000)
    cy.get('ul#function0 div:nth-child(1) > li > a').type('{Enter} ') //sheet select
    cy.wait(10000)
    cy.get('div#content div:nth-child(6) > div > img').click() //Enable charts
    cy.wait(9000)
    cy.get('div#content div:nth-child(4) > button#sheetheader_btndropdwn > span').type('{Enter}') //add new chart
    //cy.get('input#AddChartName').type('Cart1B123') //Enter chart name
    cy.get('input#AddChartName').type(userID_Alpha_Numeric())  //Enter chart name
    cy.wait(5000)
    
    cy.wait(3000)

    cy.get('section#modal-vmain button[type="button"].btn.mymodalbtn_save.float-right').type('{Enter} ') // Create chart
    cy.wait(3000)
    cy.contains('Add Data').click({force: true})
    // cy.get('#highcharts-grr9yt9-2 > .highcharts-root > .btn-ADDDATA > .highcharts-button-box').type('{Enter} ')
   cy.wait(7000)
   cy.get('div#content div:nth-child(4) > button#sheetheader_btndropdwn > span').type('{Enter}') //add new chart
    //cy.get('input#AddChartName').type('Cart1B123') //Enter chart name
    cy.get('input#AddChartName').type(kpi())  //Enter chart name
    
    cy.wait(3000)
    cy.get('section#modal-vmain div.active > span').click() //select kpi
    cy.get('section#modal-vmain button[type="button"].btn.mymodalbtn_save.float-right').type('{Enter} ')
    cy.wait(7000)
    cy.get('div#content div:nth-child(4) > button#sheetheader_btndropdwn > span').type('{Enter}') //add new chart
     //cy.get('input#AddChartName').type('Cart1B123') //Enter chart name
     cy.get('input#AddChartName').type(lookup())  //Enter chart name
     
     cy.wait(3000)
     cy.get('section#modal-vmain div:nth-child(3) > span').click() //select lookup
     cy.get('section#modal-vmain button[type="button"].btn.mymodalbtn_save.float-right').type('{Enter} ')
  }
function userID_Alpha_Numeric() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
    for (var i = 0; i < 2; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
      text = "chart_" + text;
    return text;
  }
  function kpi() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
    for (var i = 0; i < 2; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
      text = "KPI_" + text;
    return text;
  }
  function lookup() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
    for (var i = 0; i < 2; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
      text = "Lookup_" + text;
    return text;
  }