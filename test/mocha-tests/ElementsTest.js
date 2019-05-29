var homePage = require("../../pages/HomePage");
var addElementPage = require("../../pages/AddElementPage");

describe('Add/Remove page functionality', () => {
    it("should able to add and remove elements", () => {
        homePage.get();

        var data = browser.getUrlAndTitle("hello");
        console.log(data.url);

        homePage.navigate("ADD_REMOVE_ELEMENTS");
        addElementPage.addElement(10);
        addElementPage.removeElement(5);
        browser.pause(2000);

        // custom command
        browser.lazyClick("//div[@id='elements']/button", 2000);
        browser.lazyClick("//div[@id='elements']/button", 2000);

        // custom command
        $("//div[@id='elements']/button").waitAndClick();
        $("//div[@id='elements']/button").waitAndClick();
        browser.pause(2000);
    });
});