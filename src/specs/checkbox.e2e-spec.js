var AngularHomePage = require('./pages/home.pageObject.js');

describe('angularjs homepage, checkbox component', function() {
    var page = new AngularHomePage();

    beforeEach(function(){
        browser.get('http://www.angularjs.org');
    });    
    
    it('adding element to list', function() {
        page.todoText.sendKeys('armaggeddon');
        page.addButton.click();
        expect(page.sum.getText()).toEqual('2 of 3 remaining');
    });

    it('should remove element from list', function() {
        page.archiveLink.click();
        expect(page.sum.getText()).toEqual('1 of 1 remaining');
    });

    it('should check element of list', function() {
        page.doneButton.click();
        expect(page.sum.getText()).toEqual('2 of 2 remaining');
    });
});