module.exports = new PublicationData();

function PublicationData() {
    var that = this;

    that.number = element(by.model('publication.name'));
    that.type = element(by.model('publication.type'));
    that.date = element(by.model('dateItem'));
    that.price = element(by.model('publication.priceType'));
}