module.exports = new ProductionsPage();

function ProductionsPage() {    
    var that = this;
    var data = require('../data/productions.e2e-data.json');

    that.productionsMenuElement = element(by.partialLinkText(data.productionsMenuElement));
    that.cancelMessage = element(by.cssContainingText('.cp-text-color', data.cancelMessage));

    that.cancelButton = element(by.css('.fa-undo'));
    that.title = element(by.binding('applicationTitle'));
    that.number = element(by.model('publication.name'));
    that.type = element(by.model('publication.type'));
    that.date = element(by.model('dateItem'));
    that.price = element(by.model('publication.priceType'));
}