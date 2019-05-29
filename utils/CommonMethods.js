module.exports = (function () {
    browser.addCommand("waitAndClick", function () {
        // `this` is return value of $(selector)
        this.waitForVisible();
        this.click();
    }, true);

    browser.addCommand("getUrlAndTitle", function (customVar) {
        // `this` refers to the `browser` scope
        return {
            url: this.getUrl(),
            title: this.getTitle(),
            customVar: customVar
        };
    });

    browser.addCommand("lazyClick", (element, time) => {
        var ele = $(element);
        browser.pause(time);
        ele.click();
        return ele;
    });

    browser.addCommand("clickThenSetValue", (selector, value) => {
        browser.click(selector);
        browser.setValue(selector, value);
    });
})();