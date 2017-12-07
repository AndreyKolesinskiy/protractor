"use strict";

module.exports = AssignmentPopup;

function AssignmentPopup(data) {
    var that = this;
    that.data = data;

    that.publicationPart = element(by.model('item.publicationPart'));
    that.page = element(by.model('item.page'));

    that.setPublicationPart = function () {
        element(by.model('item.publicationPart')).$("[value='" + that.data.publicationPart + "']").click();
    };

    that.setPage = function () {
        element(by.model('item.page')).$("[value='" + that.data.page + "']").click();
    };
}