import BasePage from './BasePage';

class SearchPage extends BasePage {

  get searchBox() {
    return $('#gh-ac');
  }

  searchFor(str) {
    this.searchBox.setValue(str);
    this.searchBox.click();
  }

  get searchCategory() {
    return $('//select[@id="gh-cat"]/option[@value="0"]');
  }
  get paginationDropDown(){
    return $('//div[@id=\'mainContent\']');
  }


  open() {
    super.open('https://www.ebay.com/');
  }

}


export default new SearchPage();