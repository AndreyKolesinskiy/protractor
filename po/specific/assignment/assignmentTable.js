module.exports = new AssignmentsTable();

function AssignmentsTable() {
    var that = this;

    that.addedElement = element(by.tagName('body')).all(by.css('.htAutocomplete.current')).last();
}