class Login_po{

EnterURL(){

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
}
Login(){

        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('.oxd-button').click();
}
clickforgotpassword(){
    cy.get('.orangehrm-login-forgot-header').click();


}
}
export default Login_po;
