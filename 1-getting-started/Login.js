// //const { cyan } = require("colorette")

//     describe('My First Test', function()
//  {
//     it('onplan', function() 
//     {
//       let environment =['https://staging.onplanapp.com/','https://staging2.onplanapp.com/','https://staging3.onplanapp.com/','https://staging4.onplanapp.com/','https://uat.onplanapp.com/']
//       let envIndex = prompt("Please choose envio 1To5: ");
//       localStorage.setItem("name", "pandey");
//       alert("Hello !",localStorage.getItem("name"));

//       cy.visit(environment[envIndex-1])
      
//       cy.title().should('eq','Onplan')
//     //  let username = prompt("Enter your userName: ");
//       //let password = prompt("Enter your password: ");
      
//       //let username = ['Sudhanshu.pandey@innogent.in']
//      //let password = ['T8dkM1Ul']
     
//       cy.get('#inputEmail').type('Sudhanshu.pandey@innogent.in')
//       cy.get('#inputPassword').type('XsP85cPS')
//       cy.get('.mt-2').type('{Enter} ')
//       cy.wait(3000)
//       //let company = prompt("Enter company name: ");
//      // let password = ('T8dkM1Ul');
//       cy.get('section#logn-screenv div.css-1hwfws3.custom-scrollbar__value-container').type('Regular Company four')
//       //cy.get('section#logn-screenv div.css-1hwfws3.custom-scrollbar__value-container').type('Regular company')
//       .get('section#logn-screenv div.css-1hwfws3.custom-scrollbar__value-container').type('{Enter} ')
//       .get('section#logn-screenv div.css-1hwfws3.custom-scrollbar__value-container').type('{Enter} ')
//       // .get('div#react-select-6-option-49').click()
//      //.get('div#react-select-6-option-49').type('{Enter}')
// //     cy.get('[name="Regular company four"]').click().get.('div#react-select-6-option-49"]').click()
// //      cy.get('a[section#logn-screenv div.css-1hwfws3.custom-scrollbar__value-container*="Regular company four"]').click()
//       cy.wait(9000)
//       cy.wait(9000)
//      //cy.get('#logn-screenv button:nth-child(2)').type('{Enter} ')
//      //cy.get('ul#import div > li > a').type('{Enter} ')
//      //cy.wait(9000)
//     // cy.get('#accordionExample input#search').type('sheet')
//    //  cy.get('#accordionExample li.menu.bg-white.menuwithdots.menutocollapse > a').type('{Enter} ')
//      //cy.get('#function0 a').type('{Enter} ')
//      //cy.title().should('eq','Onplan-Dashboard-Revenue') // Verify that open screen is default dashboard
//      //cy.wait(9000)
//      //alert("Login successfull");
//      cy.get('.bg-white.menutocollapse > .dropdown-toggle').type('{Enter}')
//      cy.wait(9000)

//      cy.get('ul#function0 a').click()
     


//      for(var i = 0; i<30; i++){
//       cy.contains('ul#function0 div > img').click({force: true})
//       cy.get('ul#import div > li > a').type('{Enter} ')
//       cy.get('ul#function0 li:nth-child(2) > a').type('{Enter} ')
//       cy.get('div#container button.btn.mymodalbtn_save.float-right.mr-3').type('{Enter} ')
//       cy.wait(22000)
// }
//          })
//   })
const { cyan } = require("colorette")

    describe('My First Test', function()
 {
    it('onplan', function() 
    {
      let environment =['https://staging.onplanapp.com/','https://staging2.onplanapp.com/','https://staging3.onplanapp.com/','https://staging4.onplanapp.com/','https://uat.onplanapp.com/']
      let envIndex = prompt("Please choose envio 1To5: ");
      localStorage.setItem("name", "pandey");
      //alert("Hello !",localStorage.getItem("name"));

      cy.visit(environment[envIndex-1])
      
      cy.title().should('eq','Onplan')
    //  let username = prompt("Enter your userName: ");
      //let password = prompt("Enter your password: ");
      
      //let username = ['Sudhanshu.pandey@innogent.in']
     //let password = ['T8dkM1Ul']
     
      cy.get('#inputEmail').type('Sudhanshu@onplan.co')
      cy.get('#inputPassword').type('Ye40egEF')
      cy.get('.mt-2').type('{Enter} ')
      cy.wait(3000)
    
      cy.get('section#logn-screenv div.css-1hwfws3.custom-scrollbar__value-container').type('Regular Company four')
      .get('section#logn-screenv div.css-1hwfws3.custom-scrollbar__value-container').type('{Enter} ')
      .get('section#logn-screenv div.css-1hwfws3.custom-scrollbar__value-container').type('{Enter} ')
      
   cy.wait(9000)
    
     cy.title().should('eq','Onplan-Dashboard-Revenue') // Verify that open screen is default dashboard
     cy.wait(9000)
     cy.get('ul#accordionExample li.menu.bg-white.menuwithdots.menutocollapse > a').type('{Enter}'    )
     cy.wait(3000)
     cy.get('#function0 > div.d-flex > .menu-dots-items').invoke('show') //sheet select
     cy.wait(3000)
    
    // cy.get('ul#function0 a').click()
     


     for(var i = 0; i<30; i++){
      cy.get('.css-119kd2a > .css-1wy0on6 > .css-1t52tqa-indicatorContainer').click({force: true})
      //cy.get('ul#import div > li > a').type('{Enter} ')
      cy.get('ul#function0 li:nth-child(2) > a').click()
      cy.wait(5000)
      cy.get('div#container button.btn.mymodalbtn_save.float-right.mr-3').click()
      cy.wait(32000)
      cy.get('ul#accordionExample li.menu.bg-white.menuwithdots.menutocollapse > a').type('{Enter}'    )
      cy.wait(3000)
      cy.get('#function0 > div.d-flex > .menu-dots-items').invoke('show') //sheet select
      cy.wait(3000)
     
      cy.get('ul#function0 a').click()
    }
    })
  })
