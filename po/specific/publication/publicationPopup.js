module.exports = PublicationPopup;

var Input = require('../../common/input.js');

function PublicationPopup(data) {
    var that = this;
    that.data = data;

    Input.call(that);

    that.season = element(by.model('newPublication.season'));
    that.newNumber = element(by.model('newPublication.name'));
    that.type = element(by.model('newPublication.type'));
    that.priceType = element(by.model('newPublication.priceType'));
    that.description = element(by.model('newPublication.description'));
    that.mainDate = element(by.cssContainingText('.modal-content .row.smallspacer', 'Haupt-ET')).$('.form-control');
    that.tradeDate = element(by.cssContainingText('.modal-content .row.smallspacer', 'Warenabgabe')).$('.form-control');
    that.plusButton = element(by.css('.btn-toolbar')).$('.glyphicon-plus');
    that.trashButton = element(by.css('.glyphicon-trash'));

    that.setType = function () {
        element(by.model('newPublication.type')).$("[value='" + that.data.testType + "']").click();
    };

    that.setPrice = function () {
        element(by.model('newPublication.priceType')).$("[value='" + that.data.testPrice + "']").click();
    };
}