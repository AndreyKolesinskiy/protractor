var AngularHomePage = require('./pages/home.e2e-po.js');

describe('angularjs homepage, list component', function() {
    var page = new AngularHomePage();

    beforeEach(function(){
        browser.get('http://www.angularjs.org');
    });
    
    it('should show entered element in list', function() {       
        page.search.sendKeys('AngularJS');
        expect(page.name.getText()).toEqual('AngularJS');
    });

    it('should dont show entered element in list', function() {        
        page.search.sendKeys('Other');
        expect(page.name.isPresent()).toEqual(false);
    });
});