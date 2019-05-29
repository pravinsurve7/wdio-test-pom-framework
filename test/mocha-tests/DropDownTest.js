var homePage = require("../../pages/HomePage");
var dropDownPage = require("../../pages/DropDownPage");

describe('Drop Down page functionality', () => {
    it("should able to select drop down value", () => {
        homePage.get();
        var data = browser.getUrlAndTitle("hello");
        console.log(data.url);
        homePage.navigate("DROPDOWN");
        dropDownPage.selectDropDownValue("Option 2");
        browser.pause(2000);
    });
});