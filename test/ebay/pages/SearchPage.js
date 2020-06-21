import BasePage from './BasePage';

class SearchPage extends BasePage {

  get searchBox() {
    return $('#gh-ac');
  }

  get searchItems() {
    return  $$('//ul[@class="srp-results srp-list clearfix"]//h3[@class="s-item__title"]');
  }

  searchFor(str) {
    this.searchBox.setValue(str);
    this.searchBox.click();
    browser.keys('Enter');
  }

  get searchCategory() {
    return $('//select[@id="gh-cat"]/option[@value="0"]');
  }
  get paginationDropDown(){
    return $('//span[contains(text(),"Items Per Page")]');
  }

  get viewOptionBtn(){
    return $('//span[@id="s0-13-11-5-1[0]-60"]//button[1]');
  }


  open() {
    super.open('https://www.ebay.com/');
  }


  changeView() {
    this.viewOptionBtn.click();
    if ($('//span[text()="List View"]').isDisplayed()) {
      $('//span[text()="List View"]').click()
    } else {
      browser.keys("Escape")
    }
  }

    changeItemPerList(num) {
      this.paginationDropDown.scrollIntoView();
      this.paginationDropDown.click();
      browser.keys(['Tab', 'Enter']);
      browser.pause(3000);
       $(`//span[text()="${num}"]`).waitForClickable();
       $(`//span[text()="${num}"]`).click();

    }






}


export default new SearchPage();