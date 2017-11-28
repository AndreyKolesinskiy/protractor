module.exports = AssignmentPopup;

var Dropdown = require('../../common/dropdown.js');

function AssignmentPopup() {
    var that = this;

    Dropdown.call(that);

    that.publicationPart = element(by.model('item.publicationPart'));
    that.page = element(by.model('item.page'));
}