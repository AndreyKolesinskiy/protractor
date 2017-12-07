"use strict";

module.exports = PublicationData;

var Input = require('../../common/input.js');
PublicationData.prototype = Object.create(Input.prototype);

function PublicationData (data) {
    Input.apply(this, arguments);
    var that = this;
    that.data = data;

    that.cancelButton = element(by.css('.fa-undo'));
    that.cancelMessage = element(by.cssContainingText('.cp-text-color', 'Noch nichts geändert'));

    that.publication = {
        number : element(by.model('publication.name')),
        type : element(by.model('publication.type')),
        date : element.all(by.model('dateItem')).first(),
        price : element(by.model('publication.priceType'))
    };

    that.testPublication = {
        number : element(by.model('publication.name')),
        type : element(by.model('publication.type')),
        date : element.all(by.model('dateItem')).first(),
        price : element(by.model('publication.priceType'))
    };
}