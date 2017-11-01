var AngularHomePage = require('./pages/home.pageObject.js');

describe('angularjs homepage, checkbox component', function() {

    var page;
    beforeEach(function () {
        page = new AngularHomePage();
    });

    it('adding element to list', function() {
        page.setTodoText('armaggeddon');
        page.addButtonClick();
        expect(page.getSum()).toEqual('2 of 3 remaining');
    });

    it('remove element from list', function() {
        page.archiveLinkClick();
        expect(page.getSum()).toEqual('1 of 1 remaining');
    });

    it('check element of list', function() {
        page.doneButtonClick();
        expect(page.getSum()).toEqual('2 of 2 remaining');
    });
});