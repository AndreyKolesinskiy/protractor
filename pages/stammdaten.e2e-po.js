module.exports = StammdatenPage;

function StammdatenPage() {    
    var that = this;

    that.seasonsMenuSubElement = element(by.partialLinkText('Saisons'));
    that.privilegesMenuSubElement = element(by.partialLinkText('Vorteile'));
    that.menuElement = element(by.partialLinkText('STAMMDATEN'));
    that.title = element(by.binding('applicationTitle'));
    that.season = element(by.cssContainingText('.col-md-2', '34'));
    that.identity = element(by.model('item.identity'));
    that.name = element(by.model('item.name'));    
    that.startDate = element.all(by.model('dateItem')).first();
    that.endDate = element.all(by.model('dateItem')).last();    
    that.firstListItem = element(by.repeater('item in items').row(0));
    that.secondListItem = element(by.repeater('item in items').row(1));
    that.plusButton = element(by.css('.glyphicon-plus'));
    that.minusButton = element(by.css('.glyphicon-minus'));
    that.okButton = element(by.buttonText('Anlegen'));
    that.yesButton = element(by.buttonText('Ja'));
    that.popupNameField = element.all(by.model('item.name')).last();
    that.saveButton = element(by.css('.fa-floppy-o'));
}