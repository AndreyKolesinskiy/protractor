module.exports = AssignmentAddingPopup;

var DropdownMenu = require('../../parent/dropdown.js');

function AssignmentAddingPopup() {
    var that = this;

    DropdownMenu.call(that);

    that.publicationPart = element(by.model('item.publicationPart'));
    that.page = element(by.model('item.page'));
}