import { userID_Alpha_Numeric } from "./createmodel"

export function createapp(){
cy.get('nav#sidebar div.simple-tab.new-sidebar.add-scrollbar > ul#accordionExample > li:nth-child(2) > a > div > span').click()
cy.get('a#dimension-matrix-tab').click()
cy.get('div#lineTabContent-3 tr:nth-child(1) > td:nth-child(2) > label > span').click()
cy.get('a#libraryDropdown > img').click()  //click on app store icon
cy.get('a#libraryDropdown li.pb-1').click() 
cy.get('div#container div.add-app-btn > button').click() //click on add app
cy.get('input#inputScenarioName').type(userID_Alpha_Numeric ('App'))  //input app name
cy.wait(5000)
//cy.get(':nth-child(3) > .form-group > .css-1bzggys > .css-a8luyz > .css-1wy0on6 > .css-1t52tqa-indicatorContainer > img').click()  // Select tags
//cy.get('div#react-select-5-option-0').click() //select Tags not mandatory
cy.get(':nth-child(4) > .form-group > .css-1bzggys > .css-a8luyz > .css-1hwfws3').type('{Enter} ')
cy.get('.d-inline-block > .mymodalbtn_save').click()

cy.wait(9000)

cy.get(':nth-child(4) > .nav-link > img').click()
cy.get('nav#sidebar div.simple-tab.new-sidebar.add-scrollbar > ul#accordionExample > li:nth-child(2) > a > div > span').click()
cy.get('a#dimension-matrix-tab').click()
cy.get('div#lineTabContent-3 tr:nth-child(1) > td:nth-child(2) > label > span').click()

}   