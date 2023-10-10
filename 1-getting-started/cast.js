// describe('My First Test', function()
// {
   


   
//     it('onplan', function() 
//     {
       
//     cy.visit('https://castindia.in')  
//     cy.wait(9000)
//     cy.get("div:nth-child(3) > ul > li:nth-child(1) > a").click()
//     cy.get('input[name="aspmobile"]').type('8009041702')
    
//  })



// }) 
  describe('convert data to Json', () => 
{ it('read data from xcel', () =>
 { 
   cy.parseXlsx('cypress/fixtures/excelData.xlsx').then( (jsonData) =>
    { const rowLength = Cypress.$(jsonData[0].data).length
       for (let index = 0; index < rowLength; index++)
        { 
          var jsonData = jsonData[index].data 
          console.log(jsonData[index].data)
          cy.writeFile("cypress/fixtures/xlsxData.json", {username:jsonData[0][0], password:jsonData[0][1]})
        }
    })
 })
}) 