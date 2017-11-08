module.exports = AngularHomePage;

function AngularHomePage() {
    this.nameInput = element(by.model('yourName'));
    this.greeting = element(by.binding('yourName'));
    this.todoText = element(by.model('todoList.todoText'));
    this.sum = element(by.binding('todoList.todos.length'));
    this.addButton = element(by.buttonText('add'));
    this.archiveLink = element(by.linkText('archive'));
    this.doneButton = element(by.model('todo.done'));
    this.search = element(by.model('projectList.search'));
    this.name = element(by.binding('project.name'));
}