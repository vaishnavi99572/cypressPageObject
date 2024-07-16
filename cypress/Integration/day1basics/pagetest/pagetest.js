import Login_po from "../../../support/pageobject/orangehrm/loginpage";
import Link_po from "../../../support/pageobject/orangehrm/link_po";
import Logout_po from "../../../support/pageobject/orangehrm/logout";

describe('', () => {
    const login_po = new Login_po();
    const link_po = new Link_po();
    const logout_po = new Logout_po();

    it(' test 1', () => {
        login_po.EnterURL();
        login_po.Login();


        link_po.linkclick('Maintenance');

        logout_po.logout();
        
    });
});