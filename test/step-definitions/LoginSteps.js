const {
    Before,
    Given,
    When,
    Then,
    After,
    Status,
    setDefaultTimeout
} = require('cucumber');

var homePage = require("../../pages/HomePage");
var formAuthenticationPage = require("../../pages/FormAuthenticationPage");

Before(function () {
    console.log('BEFORE');
});

Given('home page should be loaded', () => {
    homePage.get();
});

When('i click on form authentication link', () => {
    homePage.navigate("FORM_AUTHENTICATION");
});

Then('enter the valid credentials and logout', () => {
    formAuthenticationPage.login("tomsmith", "SuperSecretPassword!");
    formAuthenticationPage.logout();
});