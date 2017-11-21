module.exports = new PublicationsPage();

function PublicationsPage() {    
    var that = this;

    that.productionsMenuElement = element(by.partialLinkText('Publikationspflege'));
    that.title = element(by.binding('applicationTitle'));
    that.plusButton = element(by.css('.glyphicon-plus'));
    that.minusButton = element(by.css('.glyphicon-minus'));
    that.season = element(by.model('newPublication.season'));
    that.newNumber = element(by.model('newPublication.name'));
    that.type = element(by.model('newPublication.type'));
    that.mainDate = element(by.css('.modal-content')).all(by.model('dateItem')).first();
    that.tradeDate = element(by.css('.modal-content')).all(by.model('dateItem')).last();
    that.priceType = element(by.model('newPublication.priceType'));
    that.description = element(by.model('newPublication.description'));
    that.okButton = element(by.buttonText('Anlegen'));
    that.trashButton = element(by.css('.glyphicon-trash'));
    that.yesButton = element(by.buttonText('Ja'));
}