//const { cyan } = require("colorette")
//import "cypress-ag-grid";
import { createapp } from './createapp'
import { createcube } from './createcube'
import { createdashboard } from './createdashboard'
import { createfolder } from './createfolder'
import { createlusheet } from './createlusheet'
import { createmodel } from './createmodel'
import { createscenario } from './createscenario'
import { createsheet } from './createsheet'
import { createsnapshot } from './createsnapshot'
import { deletemodel } from './deletemodel'
import { favouriteissue } from './favouriteissue'
import { mod } from './mod'
import {navigate_sheet, visitOnplan} from './navigate_sheet.spec'
import { rollback } from './rollback'
import { rollforward } from './rollforward'
import { switchscenario } from './switchscenario'
import { uploadhierarchy } from './uploadhierarchy'
import { uploadintersection } from './uploadintersection'
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
       
      //cy.visit('https://staging.onplanapp.com/')
       cy.visit('https://uat.onplanapp.com/')
       cy.title().should('eq','Onplan')
       cy.uatlogin()
      //cy.login()
    //  cy.wait(9000)
      cy.wait(5000)
   createmodel()
   cy.wait(9000)
  //deletemodel()
cy.wait(25000)
createapp()
      // createscenario()
 cy.wait(10000)
 navigate_sheet()
 
// favouriteissue()
 //switchscenario()
 cy.wait(5000)
  createsheet ()
  cy.wait(9000)
  createlusheet()
  cy.wait(9000)
  createdashboard()
  cy.wait(9000)
  createfolder()
 
  cy.wait(9000)
  rollforward()
  cy.wait(9000)
//  rollback()
//  cy.wait(9000)
//      navigate_sheet()
  cy.wait(9000)
 createsnapshot()
//  cy.wait(25000)
    // navigate_sheet()
  // createcube()
//    cy.wait(5000)
//      uploadhierarchy()
  
//      cy.wait(5000)
//      cy.get('div#content button.btn.mymodalbtn_close.float-left.pl-0.text-left').click()
// uploadintersection()
// cy.wait(5000)
// cy.get('div#content button.btn.mymodalbtn_close.float-left.pl-0.text-left').click()
//mod()
//cy.contains('Create a Model').click({force: true})
//cy.wait(9000)
// cy.get('#creat-mdl > img').focu
// .get('#creat-mdl > img').click()
//  cy.contains('Create a Model').click()
//  cy.focused('#creat-mdl > img').click()
 //cy.get('button').then(($button) => {
   //return new Cypress.Promise((resolve, reject) => {
     // do something custom here
   })
 })  