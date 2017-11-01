var AngularHomePage = function() {
    
    var nameInput = element(by.model('yourName'));
    var greeting = element(by.binding('yourName'));
    var todoText = element(by.model('todoList.todoText'));
    var sum = element(by.binding('todoList.todos.length'));
    var addButton = element(by.buttonText('add'));
    var archiveLink = element(by.linkText('archive'));
    var doneButton = element(by.model('todo.done'));
    var search = element(by.model('projectList.search'));
    var name = element(by.binding('project.name'));

    browser.get('http://www.angularjs.org');

    this.setName = function(name) {
        nameInput.sendKeys(name);
    };

    this.getGreeting = function() {
        return greeting.getText();
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

    this.setSearchArgument = function(argument) {
        search.sendKeys(argument);
    };

    this.getName = function() {
        return name.getText();
    }
};

module.exports = AngularHomePage;