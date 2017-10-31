describe('angularjs homepage', function() {
    it('should greet the named user', function() {
        browser.get('http://www.angularjs.org');
        
        element(by.model('yourName')).sendKeys('Julie');
        
        var greeting = element(by.binding('yourName'));
        expect(greeting.getText()).toEqual('Hello Julie!');
    });
});

describe('angularjs homepage', function() {
    it('adding element to list', function() {
        browser.get('http://www.angularjs.org');

        element(by.model('todoList.todoText')).sendKeys('armaggeddon');
        element(by.buttonText('add')).click();

        var sum = element(by.binding('todoList.todos.length'));
        expect(sum.getText()).toEqual('2 of 3 remaining');
    });
});