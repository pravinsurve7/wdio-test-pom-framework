class AddElementPage {
    get btnAddElement() {
        return $("//div[@class='example']/button");
    }

    get btnRemoveElement() {
        return $("//div[@id='elements']/button");
    }

    addElement(noOfElements) {
        var n = 1;
        while (n <= noOfElements) {
            this.btnAddElement.waitForVisible();
            this.btnAddElement.click();
            n++;
        }
    }

    removeElement(noOfElements) {
        var n = 1;
        while (n <= noOfElements) {
            this.btnRemoveElement.waitForVisible();
            this.btnRemoveElement.click();
            n++;
        }
    }
}

module.exports = new AddElementPage();