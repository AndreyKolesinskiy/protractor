module.exports = new PublicationAddingPopup();

function PublicationAddingPopup() {
    var that = this;

    that.season = element(by.model('newPublication.season'));
    that.newNumber = element(by.model('newPublication.name'));
    that.type = element(by.model('newPublication.type'));
    that.priceType = element(by.model('newPublication.priceType'));
    that.description = element(by.model('newPublication.description'));
    that.mainDate = element(by.css('.modal-content')).all(by.model('dateItem')).first();
    that.tradeDate = element(by.css('.modal-content')).all(by.model('dateItem')).last();
}