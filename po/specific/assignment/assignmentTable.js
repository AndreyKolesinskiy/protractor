module.exports = new AssignmentsTable();

function AssignmentsTable() {
    var that = this;

    that.addedElement = element(by.css('.ht_clone_left.handsontable .htAutocomplete.current'));
}