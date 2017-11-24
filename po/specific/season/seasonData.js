module.exports = new SeasonData();

function SeasonData() {
    var that = this;

    that.identity = element(by.model('item.identity'));
    that.name = element(by.model('item.name'));
    that.startDate = element.all(by.model('dateItem')).first();
    that.endDate = element.all(by.model('dateItem')).last();
}