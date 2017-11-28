module.exports = PublicationData;

var Input = require('../../common/input.js');
var Dropdown = require('../../common/dropdown.js');

function PublicationData() {
    var that = this;

    Input.call(that);
    Dropdown.call(that);

    that.number = element(by.model('publication.name'));
    that.type = element(by.model('publication.type'));
    that.date = element.all(by.model('dateItem')).first();
    that.price = element(by.model('publication.priceType'));
}