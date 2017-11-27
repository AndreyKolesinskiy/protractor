module.exports = PublicationData;

var ValueSetter = require('../../parent/inputs.js');
var DropdownMenu = require('../../parent/dropdown.js');

function PublicationData() {
    var that = this;

    ValueSetter.call(that);
    DropdownMenu.call(that);

    that.number = element(by.model('publication.name'));
    that.type = element(by.model('publication.type'));
    that.date = element(by.model('dateItem'));
    that.price = element(by.model('publication.priceType'));
}