"use strict";

module.exports = AssignmentsTable;

function AssignmentsTable(data) {
    var that = this;

    that.addedElement = element(by.css('.ht_clone_left.handsontable .htAutocomplete.current'));
    that.arrow = element(by.css('.ht_clone_left .htAutocomplete.current .htAutocompleteArrow'));
    that.number = element(by.cssContainingText('.listbox.htDimmed.current', data.eshopNumber));
}