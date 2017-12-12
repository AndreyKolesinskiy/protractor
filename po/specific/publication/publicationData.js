"use strict";

module.exports = PublicationData;

var input = require('../../common/input.js'),
    Dropdown = require('../../common/dropdown.js');

PublicationData.prototype = Object.create(Dropdown.prototype);

function PublicationData (data) {
    var that = this;
    that.data = data;

    that.cancelButton = $('.fa-undo');
    that.cancelMessage = element(by.cssContainingText('.cp-text-color', 'Wurde gespeichert'));

    that.publication = {
        number : element(by.model('publication.name')),
        type : element(by.model('publication.type')),
        date : element.all(by.model('dateItem')).first(),
        price : element(by.model('publication.priceType'))
    };

   that.inputValue = function (elem, value) {
       return input.setValue(elem, value);
   }
}