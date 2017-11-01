describe('angularjs homepage, list component', function() {
    it('have entered element in list', function() {
        browser.get('http://www.angularjs.org');

        element(by.model('projectList.search')).sendKeys('AngularJS');

        var name = element(by.binding('project.name'));
        expect(name.getText()).toEqual('AngularJS');
    });
    it('dont have entered element in list', function() {
        browser.get('http://www.angularjs.org');

        element(by.model('projectList.search')).sendKeys('Other');

        var name = element(by.binding('project.name'));
        expect(name).nothing();
    });
});