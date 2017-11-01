describe('angularjs homepage, list component', function() {
    
    it('have entered element in list', function() {
        var angularHomePage = new AngularHomePage();
        angularHomePage.get();

        angularHomePage.setSearchArgument('AngularJS');
        expect(angularHomePage.getName()).toEqual('AngularJS');
    });

    it('dont have entered element in list', function() {
        var angularHomePage = new AngularHomePage();
        angularHomePage.get();

        angularHomePage.setSearchArgument('Other');
        expect(angularHomePage.name).nothing();
    });
});

var AngularHomePage = function() {
    var search = element(by.model('projectList.search'));
    var name = element(by.binding('project.name'));

    this.get = function() {
        browser.get('http://www.angularjs.org');
    };

    this.setSearchArgument = function(argument) {
        search.sendKeys(argument);
    };

    this.getName = function() {
        return name.getText();
    }
}