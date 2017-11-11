module.exports = StammdatenPage;

function StammdatenPage() {
    var EC = protractor.ExpectedConditions;
    var that = this;

    that.saisonsMenuSubElement = element(by.partialLinkText('Saisons'));
    that.vorteileMenuSubElement = element(by.partialLinkText('Vorteile'));
    
    that.menuElement = element(by.partialLinkText('STAMMDATEN'));
    that.title = element(by.binding('applicationTitle'));

    that.visibilityWaitingAndClick = function (element) {
        browser.wait(EC.visibilityOf(element), 6000);
        browser.actions().click(element).perform();
    };
}