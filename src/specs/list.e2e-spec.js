var AngularHomePage = require('./pages/home.pageObject.js');

describe('angularjs homepage, list component', function() {
    var page = new AngularHomePage();

    beforeEach(function(){
        browser.get('http://www.angularjs.org');
    });
    
    it('have entered element in list', function() {       
        page.search.sendKeys('AngularJS');
        expect(page.name.getText()).toEqual('AngularJS');
    });

    it('dont have entered element in list', function() {        
        page.search.sendKeys('Other');
        expect(page.name.isPresent()).toEqual(false);
    });
});