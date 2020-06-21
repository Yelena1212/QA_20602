import SearchPage from '../pages/SearchPage';

before(() => {
  SearchPage.open()
  });


describe('VIRIFY PAGINATION WORKS CORECTLY', () => {
  it('should search for "shampoo"', function() {
    SearchPage.searchFor("shampoo");
    browser.waitUntil(() => SearchPage.searchCategory.getText() ==='Shampoos & Conditioners');
    SearchPage.changeView();
    browser.pause(3000);
  });

  it('should verify possibility to display 25 items per page', function() {
    browser.pause(3000);
    SearchPage.changeItemPerList(25);
    browser.pause(3000);
    expect(SearchPage.searchItems.length).eq(25);
    });

});