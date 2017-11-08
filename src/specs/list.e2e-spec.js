var AngularHomePage = require('../pages/home.e2e-po.js');

describe('angularjs homepage, list component', function() {
    var page = new AngularHomePage();

    /**
     * Get cell page.
     */
    beforeEach(function(){
        browser.get('http://www.angularjs.org');
    });
    
    /**
     * Entered element must be added to list.
     * */
    it('should show entered element in list', function() {       
        page.search.sendKeys('AngularJS');
        expect(page.name.getText()).toEqual('AngularJS');
    });

    /**
     * Search results of other element must be fail.
     * */
    it('should dont show entered element in list', function() {        
        page.search.sendKeys('Other');
        expect(page.name.isPresent()).toEqual(false);
    });
});