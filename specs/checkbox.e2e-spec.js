var AngularHomePage = require('../pages/home.e2e-po.js');

describe('angularjs homepage, checkbox component', function() {
    var page = new AngularHomePage();

    /**
     * Get cell page.
     */
    beforeEach(function(){
        browser.get('http://www.angularjs.org');
    });

    /**
     * Entered element must be added to list.
     */
    it('adding element to list', function() {
        page.todoText.sendKeys('armaggeddon');
        page.addButton.click();
        expect(page.sum.getText()).toEqual('2 of 3 remaining');
    });

    /**
     * Archived element must be removed.
     */
    it('should remove element from list', function() {
        page.archiveLink.click();
        expect(page.sum.getText()).toEqual('1 of 1 remaining');
    });

    /**
     * Checked element must be checked.
     */
    it('should check element of list', function() {
        page.doneButton.click();
        expect(page.sum.getText()).toEqual('2 of 2 remaining');
    });
});