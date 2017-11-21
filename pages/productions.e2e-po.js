module.exports = new ProductionsPage();

function ProductionsPage() {    
    var that = this;

    that.cancelButton = element(by.css('.fa-undo'));
    that.cancelMessage = element(by.cssContainingText('.cp-text-color', 'Noch nichts geändert'));
    that.productionsMenuElement = element(by.partialLinkText('Publikationspflege'));
    that.title = element(by.binding('applicationTitle'));
    that.number = element(by.model('publication.name'));
    that.type = element(by.model('publication.type'));
    that.date = element(by.model('dateItem'));
    that.price = element(by.model('publication.priceType'));
}