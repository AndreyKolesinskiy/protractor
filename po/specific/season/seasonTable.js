"use strict";

module.exports = SeasonsTable;

function SeasonsTable(data) {
    var that = this;
    that.data = data;

    that.season = element(by.cssContainingText('.col-md-2', data.identity));
}