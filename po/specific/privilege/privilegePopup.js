"use strict";

module.exports = new PrivilegePopup();

function PrivilegePopup() {
    var that = this;

    that.name = $('.modal-body .col-def').all(by.model('item.name'));
}