module.exports = ArtikelzuordnungPage;

function ArtikelzuordnungPage() {
    var that = this;
    var EC = protractor.ExpectedConditions;

    that.productionsMenuElement = element(by.partialLinkText('Publikationspflege'));
    that.title = element(by.binding('applicationTitle'));

    that.nod = element(by.tagName('body')).
        element(by.cssContainingText('.aciTreeText', '39, Frühling/Sommer 2015'));
    that.sub1 = element(by.tagName('body')).
        element(by.cssContainingText('.aciTreeText', 'Inszenierungspunkt'));
    that.sub2 = element(by.tagName('body')).
        element(by.cssContainingText('.aciTreeText', '3911 Schwarzpreis ET: 04.03.2016'));

    that.menuElement = element(by.partialLinkText('EINKAUF'));
    that.menuSubElement = element(by.partialLinkText('Artikelzuordnung'));

    that.visibilityWaitingAndClick = function (element) {
        browser.wait(EC.visibilityOf(element), 8000);
        browser.actions().click(element).perform();
    };

    that.visibilityWaitingAndDoubleClick = function (element) {
        browser.wait(EC.visibilityOf(element), 6000);
        browser.actions().doubleClick(element).perform();
    };
}