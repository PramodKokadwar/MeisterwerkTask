import { Selector, t } from 'testcafe'
import { ClientFunction } from 'testcafe';


class Page {
    constructor() {

        this.firstName = Selector('input[name="firstName"]');
        this.lastName = Selector('input[name="lastName"]');
        this.userName = Selector('input[name="username"]');
        this.passWord = Selector('input[name="password"]');
        this.regiLoginBtn = Selector('button[class="btn btn-primary"]');
        this.validationMessage = Selector('div[class="alert alert-success"]');
        this.deleteUser = Selector('#app').find('span').find('a');
        this.logOut = Selector('#app').find('p').find('a');
        this.getLocation = ClientFunction(() => document.location.href);

    }

    async typeFirstName(firstname) {
        await t
            // Enter FirstName
            .typeText(this.firstName, firstname)
            .expect(this.firstName.value).contains(firstname, 'input contains text ' +this.firstName.value );

    }

    async typeLastName(lastname) {
        await t
            // Enter lastName
            .typeText(this.lastName, lastname)
            .expect(this.lastName.value).contains(lastname, 'input contains text' +this.lastName.value);

    }

    async typeUserName(username) {
        await t
             // Enter UserName
            .typeText(this.userName, username)
            .expect(this.userName.value).contains(username, 'input contains text' +this.userName.value);

    }

    async typePassword(password) {
        await t
             // Enter password
            .typeText(this.passWord, password)
            .expect(this.passWord.value).contains(password, 'input contains text '+this.passWord.value);
    }

    async submitLoginButton() {
        await t
             // Click on login button
            .click(this.regiLoginBtn);
    }

    async submitRegisterButton() {
        await t
             // Click on registration button
            .click(this.regiLoginBtn);
    }

    async deleteUser() {
        await t
             // Click on delete button
            .click(this.deleteUser);
    }


    async logOut() {
        await t
              // Click on loutOut Button
            .wait(1000)
            .click(this.logOut);
    }

    async verifyRegistrationSuccessfull(Message) {
        await t
            // Validate Success Message
            .expect(this.validationMessage.textContent).eql(Message, 'check element text', { timeout: 500 });

    }

    async verifyUserIsOnLoginPage() {
        await t
        // Verify user is on login page
         .expect(this.getLocation()).contains('http://localhost:8080/login');

    }

 

}

export default new Page();