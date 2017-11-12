module.exports = StammdatenPage;

function StammdatenPage() {
    var EC = protractor.ExpectedConditions;
    var that = this;

    that.saisonsMenuSubElement = element(by.partialLinkText('Saisons'));
    that.vorteileMenuSubElement = element(by.partialLinkText('Vorteile'));    
    that.menuElement = element(by.partialLinkText('STAMMDATEN'));
    that.title = element(by.binding('applicationTitle'));
    that.season = element(by.cssContainingText('.col-md-2', '34'));
    that.identity = element(by.model('item.identity'));
    that.name = element(by.model('item.name'));    
    that.startDate = element.all(by.model('dateItem')).first();
    that.endDate = element.all(by.model('dateItem')).last();
    that.secondListItem = element(by.repeater('item in items').row(1));

    that.visibilityWaitingAndClick = function (element) {
        browser.wait(EC.visibilityOf(element), 6000);
        browser.actions().click(element).perform();
    };
}