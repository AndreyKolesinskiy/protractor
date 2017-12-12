"use strict";

module.exports = new PrivilegePopup();

function PrivilegePopup() {
    var that = this;

    that.popupNameField = $('.modal-body .col-def').all(by.model('item.name'));
}