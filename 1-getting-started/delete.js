//const { cyan } = require("colorette")
//import "cypress-ag-grid";
import { createdashboard } from './createdashboard'
import { createfolder } from './createfolder'
import { createlusheet } from './createlusheet'
import { createmodel } from './createmodel'
import { createscenario } from './createscenario'
import { createsheet } from './createsheet'
import { createsnapshot } from './createsnapshot'
import { deletemodel } from './deletemodel'
import {navigate_sheet, visitOnplan} from './navigate_sheet'
import { rollback } from './rollback'
import { rollforward } from './rollforward'
import { switchscenario } from './switchscenario'
describe('My First Test', function()
{
   before(function() {

      cy.fixture('example').then(function(data)
      {
      this.data=data
   })
})

   
    it('onplan', function() 
    {
       
      // cy.visit('https://staging4.onplanapp.com/')
       cy.visit('https://uat.onplanapp.com/')
       cy.title().should('eq','Onplan')
       cy.wait(2000)
       cy.uatlogin()
      //cy.login()
      cy.wait(9000)
       //cy.wait(20000)
  deletemodel()
  cy.wait(20000)
  deletemodel()
  cy.wait(10000)
  deletemodel()
  cy.wait(10000)
  deletemodel()
  cy.wait(10000)
  deletemodel()
  cy.wait(10000)
  deletemodel()
  cy.wait(10000)
  deletemodel()
  cy.wait(10000)
  deletemodel()
  cy.wait(10000)
  deletemodel()
  cy.wait(10000)
  deletemodel()
  cy.wait(10000)
  deletemodel()
  cy.wait(10000)
  deletemodel()
  cy.wait(10000)
  deletemodel()
}) })
  