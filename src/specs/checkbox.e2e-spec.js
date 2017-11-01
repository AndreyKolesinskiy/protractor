describe('angularjs homepage, checkbox component', function() {

    it('adding element to list', function() {
        var angularHomePage = new AngularHomePage();
        angularHomePage.get();

        angularHomePage.setTodoText('armaggeddon');
        angularHomePage.addButtonClick();
        expect(angularHomePage.getSum()).toEqual('2 of 3 remaining');
    });

    it('remove element from list', function() {
        var angularHomePage = new AngularHomePage();
        angularHomePage.get();

        angularHomePage.archiveLinkClick();
        expect(angularHomePage.getSum()).toEqual('1 of 1 remaining');
    });

    it('check element of list', function() {
        var angularHomePage = new AngularHomePage();
        angularHomePage.get();

        angularHomePage.doneButtonClick();
        expect(angularHomePage.getSum()).toEqual('2 of 2 remaining');
    });
});

var AngularHomePage = function() {
    var todoText = element(by.model('todoList.todoText'));
    var sum = element(by.binding('todoList.todos.length'));
    var addButton = element(by.buttonText('add'));
    var archiveLink = element(by.linkText('archive'));
    var doneButton = element(by.model('todo.done'));

    this.get = function() {
        browser.get('http://www.angularjs.org');
    };

    this.setTodoText = function(text) {
        todoText.sendKeys(text);
    };

    this.addButtonClick = function () {
        addButton.click();
    }

    this.archiveLinkClick = function () {
        archiveLink.click();
    }

    this.doneButtonClick = function () {
        doneButton.click();
    }

    this.getSum = function() {
        return sum.getText();
    }
}