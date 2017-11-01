var AngularHomePage = require('./pages/home.page.js');

describe('angularjs homepage, input component', function() {

    var page;
    beforeEach(function () {
        page = new AngularHomePage();
    });

    it('should greed the named user', function() {
        page.setName('Julie');
        expect(page.getGreeting()).toEqual('Hello Julie!');
    });
});