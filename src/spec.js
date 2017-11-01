describe('angularjs homepage, input component', function() {
    it('output entered text', function() {
        browser.get('http://www.angularjs.org');
        
        element(by.model('yourName')).sendKeys('Julie');
        
        var greeting = element(by.binding('yourName'));
        expect(greeting.getText()).toEqual('Hello Julie!');
    });
});

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

describe('angularjs homepage, list component', function() {
    it('have entered element in list', function() {
        browser.get('http://www.angularjs.org');

        element(by.model('projectList.search')).sendKeys('AngularJS');

        var greeting = element(by.binding('project.name'));
        expect(greeting.getText()).toEqual('AngularJS');
    });
    it('dont have entered element in list', function() {
        browser.get('http://www.angularjs.org');

        element(by.model('projectList.search')).sendKeys('Other');

        var greeting = element(by.binding('project.name'));
        expect(greeting).nothing();
    });
});