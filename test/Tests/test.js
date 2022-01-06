const { Selector } = require('testcafe')
const xpathSelector = require('../utils/xpath-selector')

fixture`My fixture`
    .page`https://release.getcerebral.com/associates/sign_in`;

test('My test', async t => {
    const inputAssociateMail = Selector('#associate_email');
    const inputPassword = Selector('#associate_password');
    const loginButton = Selector('input[value = "Log in"]')
    const inputSearchPatients = Selector('#query')
    const searchPatientsButton = Selector('button[type = "submit"]')
    const choosePatientAccount = xpathSelector('//*[@id="patient-results"]/tr[1]/td[2]/a')
    //Input associate mail
    await t.typeText(inputAssociateMail, "staging-admin@getcerebral.com");
    //Input associate password
    await t.typeText(inputPassword, "Cerebral616");
    //Click log in button.
    await t.click(loginButton);
    //input search patients
    await t.typeText(inputSearchPatients, "	minhtran292@gmail.com");
    //click search button
    await t.click(searchPatientsButton);
    //chooser patient account
    await t.click(choosePatientAccount);
    //click verification button

    await t.setNativeDialogHandler(() => true)
        .click(Selector('button').withText("Verification Complete"))



});

