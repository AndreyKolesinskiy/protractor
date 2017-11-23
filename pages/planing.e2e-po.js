module.exports = new PlaningPage();

function PlaningPage() {
    var that = this;
    var data = require('../data/planing.e2e-data.json');

    that.productionsMenuElement = element(by.partialLinkText(data.productionsMenuElement));
    that.menuElement = element(by.partialLinkText(data.menuElement));
    that.menuSubElement = element(by.partialLinkText(data.menuSubElement));

    that.title = element(by.binding('applicationTitle'));
    that.saveButton = element(by.css('.glyphicon-file'));
}