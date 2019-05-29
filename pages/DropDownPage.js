class DropDownPage {

    get drpSelectOption() {
        return $("#dropdown");
    }

    selectDropDownValue(dropDownValue) {
        this.drpSelectOption.selectByVisibleText(dropDownValue);
    };
}

module.exports = new DropDownPage();