module.exports = new AssignmentPage();

function AssignmentPage() {
    var that = this;
    var data = require('../data/assignment.e2e-data.json');

    that.productionsMenuElement = element(by.partialLinkText(data.productionsMenuElement));
    that.menuElement = element(by.partialLinkText(data.menuElement));
    that.menuSubElement = element(by.partialLinkText(data.menuSubElement));

    that.title = element(by.binding('applicationTitle'));
    that.plusButton = element(by.css('.glyphicon-plus'));
    that.publicationPart = element(by.model('item.publicationPart'));
    that.page = element(by.model('item.page'));
    that.okButton = element(by.buttonText('Anlegen'));
    that.addedElement = element(by.tagName('body')).all(by.css('.htAutocomplete.current')).last();
    that.eshopNumber = element.all(by.repeater('tab in tabs')).first().element(by.css('.input-sm.form-control'));
    that.undoButton = element(by.css('.fa-undo'));
}