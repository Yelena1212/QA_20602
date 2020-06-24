const { expect } = require('chai'); // obj destracturing assaigment

// 1. Open url
// 2. Input
// 3. Submit
//
//

// babel -> new js to old js
// babel yes - > import
// babel no -> require
//
// describe('REGISTRATION PAGE',() => {
//   before(() => {
//     browser.maximizeWindow();
//     browser.url("https://stage.pasv.us/user/register");
//   })
//
//   it('should Title is correct', function() {
//     const actualText = $('//h1').getText();
//     const expectedText = 'User Register';
//     expect(actualText).eq(expectedText);
//   });
//
//   it('should fill out firstName field', function() {
//     const inputFirstName = $('//input[@name="firstName"]');
//     inputFirstName.setValue('Dmitry');
//   });
//
//   it('should input first name is valid', function() {
//     const InputFirstName = $('//input[@name="firstName"]');
//    $('//input[@name="lastName"]').click();
//     const result = InputFirstName.getAttribute('class')
//    expect(result).contains('is-valid');
//     // console.log('+++++++++++');
//     // console.log(result);
//     // console.log('++++++++++++');
//   });
//
//   it('should fill out lastName field', function() {
//     const inputLastName = $('//input[@name="lastName"]');
//     inputLastName.setValue('Borodastov');
//     browser.keys('Tab');
//     const result = inputLastName.getAttribute('class')
//     expect(result).contains('is-valid');
//   });
//
//   it('should fill out lastName field', function() {
//     const inputLastName = $('//input[@name="email"]');
//     inputAdress.setValue('Borodastov');
//     browser.keys('Tab');
//     const result = inputLastName.getAttribute('class')
//     expect(result).contains('is-valid');
//   });
// })


// const login = require('./login');
// describe('EDIT PROFILE', () => {
//   before(() => {
//     login();
//   });
//   it('Check size t-short ', function() {
//     $('//select[@name=\'tShirtSize\']').selectByVisibleText('Men/Unisex - XL');
//     browser.pause(2000);
//
//
//   });
// });

// $('//div[@id="user-section"]//a[@class="dropdown-toggle nav-link"]').click();
// $("//button[text()='Settings']").click();