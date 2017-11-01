describe('angularjs homepage, checkbox component', function() {
    it('adding element to list', function() {
        browser.get('http://www.angularjs.org');

        element(by.model('todoList.todoText')).sendKeys('armaggeddon');
        element(by.buttonText('add')).click();

        var sum = element(by.binding('todoList.todos.length'));
        expect(sum.getText()).toEqual('2 of 3 remaining');
    });
    it('remove element from list', function() {
        browser.get('http://www.angularjs.org');

        element(by.linkText('archive')).click();

        var sum = element(by.binding('todoList.todos.length'));
        expect(sum.getText()).toEqual('1 of 1 remaining');
    });
    it('check element of list', function() {
        browser.get('http://www.angularjs.org');

        element(by.model('todo.done')).click();

        var sum = element(by.binding('todoList.todos.length'));
        expect(sum.getText()).toEqual('2 of 2 remaining');
    });
});