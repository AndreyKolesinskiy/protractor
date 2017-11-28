module.exports = PublicationPopup;

var Input = require('../../common/input.js');
var Dropdown = require('../../common/dropdown.js');

function PublicationPopup() {
    var that = this;

    Input.call(that);
    Dropdown.call(that);

    that.season = element(by.model('newPublication.season'));
    that.newNumber = element(by.model('newPublication.name'));
    that.type = element(by.model('newPublication.type'));
    that.priceType = element(by.model('newPublication.priceType'));
    that.description = element(by.model('newPublication.description'));
    that.mainDate = element(by.css('.modal-content')).all(by.model('dateItem')).first();
    that.tradeDate = element(by.css('.modal-content')).all(by.model('dateItem')).last();
}