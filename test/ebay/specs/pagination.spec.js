import SearchPage from '../pages/SearchPage';

before(() => {
  SearchPage.open()
  });


describe('VIRIFY PAGINATION WORKS CORECTLY', () => {
  it('should search for "shampoo"', function() {
    SearchPage.searchFor("shampoo");
    expect(SearchPage.searchCategory.getText()).eq('Shampoos & Conditioners');

  });

  it('should verify possibility to display 20 items per page', function() {
    SearchPage.paginationDropDown.scrollIntoView();
    SearchPage.paginationDropDown.click();
    browser.pause(3000);
    SearchPage.paginationDropDown.selectByVisibleText(20);

    }
    
  );

});