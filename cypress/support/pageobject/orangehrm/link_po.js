class Link_po{
// method to click on any link  in the webpage

// parameter is passes the text in the parameter

linkclick(link){

    cy.contains(link).click();
}
}
export default Link_po;