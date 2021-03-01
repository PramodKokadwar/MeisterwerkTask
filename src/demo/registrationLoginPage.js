import { Selector } from 'testcafe'

class registrationLoginPage {
    constructor() {

        const firstName = Selector('input[name="firstName"]');
        const lastName = Selector('input[name="lastName"]');
        const username = Selector('input[name="username"]');
        const password = Selector('input[name="password"]');
        const regiLoginBtn = Selector('button[class="btn btn-primary"]');
        const validationMessage = Selector('div[class="alert alert-success"]');
        const deleteuser = Selector('#app').find('span').find('a');
        const logOut = Selector('#app').find('p').find('a');

    }

    async typeFirstName(firstname) {
        await t
            .typeText(this.firstName, firstname)
            .expect(firstName.value).contains('firstname', 'input contains text "Pramod"');
    }

    async typeLastName(lastname) {
        await t
            .typeText(this.lastName, lastname)
            .expect(lastName.value).contains('lastname', 'input contains text "Kokadwar"');

    }

    async typeUserName(username) {
        await t
            .typeText(this.username, username)
            .expect(username.value).contains('username', 'input contains text "pramodkokadwar"');

    }

    async typePassword(password) {
        await t
            .typeText(this.password, password)
            .expect(password.value).contains('password', 'input contains text "Test@2"');
    }

    async submitLoginButton() {
        await t
            .click(regiLoginBtn);
    }

    async submitRegisterButton() {
        await t
            .click(regiLoginBtn);
    }

    async deleteUser() {
        await t
            .click(deleteuser);
    }


    async logOut() {
        await t
            .click(this.logOut);
    }


}

export default new registrationLoginPage();