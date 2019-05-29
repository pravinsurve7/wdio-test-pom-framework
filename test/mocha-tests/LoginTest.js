const assert = require("assert");
var homePage = require("../../pages/HomePage");
var formAuthenticationPage = require("../../pages/FormAuthenticationPage");

describe.skip('Login page functionality', () => {
    it('should able to login successfully', () => {
        homePage.get();
        homePage.navigate("FORM_AUTHENTICATION");
        formAuthenticationPage.login("tomsmith", "SuperSecretPassword!");
        formAuthenticationPage.logout();
        browser.pause(2000);
    });
});