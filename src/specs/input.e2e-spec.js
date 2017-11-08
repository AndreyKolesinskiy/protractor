var AngularHomePage = require('../pages/home.e2e-po.js');

describe('angularjs homepage, input component', function() {
    var page = new AngularHomePage();

    /**
     * Get cell page.
     */
    beforeEach(function () {
        browser.get('http://www.angularjs.org');
    });

    /**
     * Entered user's name must be outputted.
     */
    it('should greed the named user', function() {
        page.nameInput.sendKeys('Julie');
        expect(page.greeting.getText()).toEqual('Hello Julie!');
    });
});