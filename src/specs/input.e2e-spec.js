describe('angularjs homepage, input component', function() {
    
    it('should greed the named user', function() {
        var angularHomePage = new AngularHomePage();
        angularHomePage.get();

        angularHomePage.setName('Julie');
        expect(angularHomePage.getGreeting()).toEqual('Hello Julie!');
    });
});

var AngularHomePage = function() {
    var nameInput = element(by.model('yourName'));
    var greeting = element(by.binding('yourName'));

    this.get = function() {
        browser.get('http://www.angularjs.org');
    };

    this.setName = function(name) {
        nameInput.sendKeys(name);
    };

    this.getGreeting = function() {
        return greeting.getText();
    };
}