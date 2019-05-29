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
var addElementPage = require("../../pages/AddElementPage");

Before(function () {
    console.log('BEFORE');
});

// Given('home page should be loaded', () => {
//     homePage.get();
// });

When('i click on add remove link', () => {
    homePage.navigate("ADD_REMOVE_ELEMENTS");
});

Then('add few elements and remove those elements', () => {
    addElementPage.addElement(5);
    addElementPage.removeElement(4);
});