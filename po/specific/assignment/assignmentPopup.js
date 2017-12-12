"use strict";

module.exports = AssignmentPopup;

var Dropdown = require('../../common/dropdown.js');
AssignmentPopup.prototype = Object.create(Dropdown.prototype);

function AssignmentPopup() {
    var that = this;

    that.publicationPart = element(by.model('item.publicationPart'));
    that.page = element(by.model('item.page'));
}