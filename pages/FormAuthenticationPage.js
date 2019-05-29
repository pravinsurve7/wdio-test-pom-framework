class FormAuthenticationPage {

    get txtUsername() {
        return $("#username");
    }
    get txtPassword() {
        return $("#password");
    }
    get btnLogin() {
        return $("//button[@type='submit']");
    }
    get btnLogout() {
        return $("//a[@href='/logout']");
    }

    login(username, password) {
        this.txtUsername.waitForVisible();
        this.txtUsername.setValue(username);
        this.txtPassword.setValue(password);
        this.btnLogin.click();
        this.btnLogout.waitForExist(undefined);
    };

    logout() {
        this.btnLogout.click();
        this.btnLogout.waitForExist(undefined, true); //should detect when element is no longer visible
    }
}

module.exports = new FormAuthenticationPage();