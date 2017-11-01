var AngularHomePage = function() {
    
    this.nameInput = element(by.model('yourName'));
    this.greeting = element(by.binding('yourName'));
    this.todoText = element(by.model('todoList.todoText'));
    this.sum = element(by.binding('todoList.todos.length'));
    this.addButton = element(by.buttonText('add'));
    this.archiveLink = element(by.linkText('archive'));
    this.doneButton = element(by.model('todo.done'));
    this.search = element(by.model('projectList.search'));
    this.name = element(by.binding('project.name'));

    browser.get('http://www.angularjs.org');

    this.setName = function(name) {
        this.nameInput.sendKeys(name);
    };

    this.getGreeting = function() {
        return this.greeting.getText();
    };

    this.setTodoText = function(text) {
        this.todoText.sendKeys(text);
    };

    this.addButtonClick = function () {
        this.addButton.click();
    };

    this.archiveLinkClick = function () {
        this.archiveLink.click();
    };

    this.doneButtonClick = function () {
        this.doneButton.click();
    };

    this.getSum = function() {
        return this.sum.getText();
    };

    this.setSearchArgument = function(argument) {
        this.search.sendKeys(argument);
    };

    this.getName = function() {
        return this.name.getText();
    }
};

module.exports = AngularHomePage;