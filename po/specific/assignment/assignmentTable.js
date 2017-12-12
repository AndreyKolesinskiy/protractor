"use strict";

module.exports = AssignmentsTable;

function AssignmentsTable(data) {
    var that = this;

    that.addedElement = $('.ht_clone_left.handsontable .htAutocomplete.current');
    that.dropdownArrow = $('.ht_clone_left .htAutocomplete.current .htAutocompleteArrow');
    that.eshopNumber = element(by.cssContainingText('.listbox.htDimmed.current', data.eshopNumber));
}