module.exports = PublicationData;

Input = require('../../common/input.js');
PublicationData.prototype = Object.create(Input.prototype);

function PublicationData (data) {
    Input.apply(this, arguments);
    var that = this;
    that.data = data;

    that.number = element(by.model('publication.name'));
    that.type = element(by.model('publication.type'));
    that.date = element.all(by.model('dateItem')).first();
    that.price = element(by.model('publication.priceType'));
    that.cancelButton = element(by.css('.fa-undo'));
    that.cancelMessage = element(by.cssContainingText('.cp-text-color', 'Noch nichts geändert'));
}