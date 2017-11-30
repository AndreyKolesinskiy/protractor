module.exports = PublicationData;

var Input = require('../../common/input.js'),
Dropdown = require('../../common/dropdown.js');

function PublicationData(data) {
    var that = this;
    that.data = data;

    Input.call(that);
    Dropdown.call(that);

    that.number = element(by.model('publication.name'));
    that.type = element(by.model('publication.type'));
    that.date = element(by.xpath("//input[@placeholder='ET']"));
    that.price = element(by.model('publication.priceType'));
    that.cancelButton = element(by.css('.fa-undo'));
    that.cancelMessage = element(by.cssContainingText('.cp-text-color', 'Noch nichts geändert'));

    that.setType = function () {
        element(by.model('publication.type')).$("[value='" + that.data.testType + "']").click();
    };

    that.setPrice = function () {
        element(by.model('publication.priceType')).$("[value='" + that.data.testPrice + "']").click();
    };
}