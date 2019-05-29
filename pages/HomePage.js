class HomePage {

    get lnkFormAuthentication() {
        return $("//a[@href='/login']");
    }

    get lnkAddRemoveElements() {
        return $("//a[@href='/add_remove_elements/']");
    }

    get lnkDropDown() {
        return $("//a[@href='/dropdown']");
    }

    get() {
        browser.url('https://the-internet.herokuapp.com/');
        browser.pause(2000);
        var title = browser.getTitle();
        console.log('Title is: ' + title);
    }

    navigate(linkName) {
        switch (linkName) {
            case "FORM_AUTHENTICATION":
                this.lnkFormAuthentication.click();
                break;
            case "ADD_REMOVE_ELEMENTS":
                this.lnkAddRemoveElements.click();
                break;
            case "DROPDOWN":
                this.lnkDropDown.click();
                break;
        }
    }
}

module.exports = new HomePage();