var AngularHomePage = require('./pages/home.page.js');

describe('angularjs homepage, list component', function() {

    var page;
    beforeEach(function () {
        page = new AngularHomePage();
    });
    
    it('have entered element in list', function() {
        page.setSearchArgument('AngularJS');
        expect(page.getName()).toEqual('AngularJS');
    });

    it('dont have entered element in list', function() {
        page.setSearchArgument('Other');
        expect(page.name).nothing();
    });
});