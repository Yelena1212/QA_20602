//please show me up

const {expect} = require('chai');
const login = require('./login');

describe('EDIT PROFILE', () => {
  before(() => {
    login();
  });

  it('should click dairy in main menu ', function() {
    $("//div[@id='site-menu']//a[@qa='diary-link']").click();
  });

  it('should Title is correct', function() {
    const actualTitle = $("//h1").getText();
    expect(actualTitle).eq('Daily reports')
  });

  it('should Button create report is clickale', function() {
   const dayReportBtn = $("//a[@qa='create-day-report-button']");
   dayReportBtn.waitForClickable();
   const actualResult = dayReportBtn.isClickable();
   expect(actualResult).true;

  });``

  it('should click create button', function() {
    $("//a[@qa='create-day-report-button']").click();
  });

  it('should click on "I INDERSTOOD EVERITHING" labels', function() {

    const understoodLabel = $("//label[@for='input-1']");
    understoodLabel.click();
    const res = $("//input[@id='input-1']");
    expect(res.isSelected()).true;
    browser.pause(1000);

  });

  it('should click on checkBox "I INDERSTOOD EVERITHING"', function() {
    const el = $("//input[@id='input-2']");
    el.click();
    expect(el.isSelected()).true;

    browser.pause(1000);

  });

});