import PageModel from '../Tasks/Page/page-model';



fixture`Test Registration and Login Functionality Scenarios`
    .page`http://localhost:8080/register`;


// Login with valid credential
test('Test Registration and Login Functionality Scenarios', async t => {



        // Enter First Name
        await PageModel.typeFirstName('Pramod');

        // Enter Last Name
        await PageModel.typeLastName('Kokadwar');

        // Enter Username
        await PageModel.typeUserName('Pramodkokadwar');

        // Enter Password
        await PageModel.typePassword('Test@1');

        // Click on registration button
        await PageModel.submitRegisterButton();

        // Verify the user creation successfull message.
        await PageModel.verifyRegistrationSuccessfull('Registration successful');

        // Verify the user is on login page.
        await PageModel.verifyUserIsOnLoginPage();

        // Enter Username
        await PageModel.typeUserName('Pramodkokadwar');

        // Enter Password
        await PageModel.typePassword('Test@1');

        // Click on Login button
        await PageModel.submitLoginButton();

        // Click on delete button to delete user
        await PageModel.deleteUser();

        // Logout from Application
        await PageModel.logOut();

 

});