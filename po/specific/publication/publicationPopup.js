"use strict";

module.exports = PublicationPopup;

var input = require('../../common/input.js'),
    Dropdown = require('../../common/dropdown.js');

PublicationPopup.prototype = Object.create(Dropdown.prototype);

function PublicationPopup(data) {
    var that = this;
    that.data = data;

    that.season = element(by.model('newPublication.season'));
    that.newNumber = element(by.model('newPublication.name'));
    that.type = element(by.model('newPublication.type'));
    that.priceType = element(by.model('newPublication.priceType'));
    that.description = element(by.model('newPublication.description'));

    that.mainDate = element(by.cssContainingText('.modal-content .row.smallspacer', 'Haupt-ET')).$('.form-control');
    that.tradeDate = element(by.cssContainingText('.modal-content .row.smallspacer', 'Warenabgabe')).$('.form-control');

    that.plusButton = $('.btn-toolbar').$('.glyphicon-plus');
    that.trashButton = $('.glyphicon-trash');

    that.setElementValue = function (elem, value) {
        return input.setElementValue(elem, value);
    }
}