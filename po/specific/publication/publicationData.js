"use strict";

module.exports = PublicationData;

var input = require('../../common/input.js'),
    Dropdown = require('../../common/dropdown.js');
PublicationData.prototype = Object.create(Dropdown.prototype);

function PublicationData (data) {
    var that = this;
    that.data = data;

    that.cancelButton = element(by.css('.fa-undo'));
    that.cancelMessage = element(by.cssContainingText('.cp-text-color', 'Wurde gespeichert'));

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

   that.setElementValue = input.setElementValue;
}