"use strict";

module.exports = PublicationPopup;

var Dropdown = require('../../common/dropdown.js');
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
    that.plusButton = element(by.css('.btn-toolbar')).$('.glyphicon-plus');
    that.trashButton = element(by.css('.glyphicon-trash'));

    /**
     * Устанавливает значение элементу
     * @param {ElementFinder} elem - элемент, которому необходимо присвоить значение
     * @param {string} value - значение
     * @returns {Promise.<void>}
     */
    that.setElementValue = function (elem, value) {
        return elem.clear()
            .then(function () {
                return elem.sendKeys(value);
            });
    };
}