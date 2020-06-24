function login() {
  browser.maximizeWindow();
  browser.url('https://stage.pasv.us/user/login');
     $('//input[@name=\'email\']').setValue('lutka@yahoo.com');
     $("//input[@name='password']").setValue('lutka');
     $("//button[@type='submit']").click(); 
}

module.exports = login; 