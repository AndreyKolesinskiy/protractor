module.exports = AngularHomePage;

function AngularHomePage() {
    var that = this;

    that.nameInput = element(by.model('yourName'));
    that.greeting = element(by.binding('yourName'));
    that.todoText = element(by.model('todoList.todoText'));
    that.sum = element(by.binding('todoList.todos.length'));
    that.addButton = element(by.buttonText('add'));
    that.archiveLink = element(by.linkText('archive'));
    that.doneButton = element(by.model('todo.done'));
    that.search = element(by.model('projectList.search'));
    that.name = element(by.binding('project.name'));
}