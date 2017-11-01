describe('angularjs homepage, input component', function() {
    it('output entered text', function() {
        browser.get('http://www.angularjs.org');

        element(by.model('yourName')).sendKeys('Julie');

        var name = element(by.binding('yourName'));
        expect(name.getText()).toEqual('Hello Julie!');
    });
});