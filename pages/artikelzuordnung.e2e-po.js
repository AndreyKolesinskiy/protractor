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

    that.plusButton = element(by.css('.glyphicon-plus'));
    that.publicationPart = element(by.model('item.publicationPart'));
    that.page = element(by.model('item.page'));
    that.okButton = element(by.buttonText('Anlegen'));

    that.addedElement = element(by.tagName('body'))
        .all(by.css('.htAutocomplete.current'))
        .last();

    that.eshopNumber = element.all(by.repeater('tab in tabs')).first()
        .element(by.css('.input-sm.form-control'));

    that.undoButton = element(by.css('.fa-undo'));

    // Wurde gespeichert

    that.changeElementMenu = function (element, value) {
        browser.wait(EC.visibilityOf(element), 8000);
        if (value == 'UP') {
            browser.actions().click(element)
                .sendKeys(protractor.Key.ARROW_UP)
                .sendKeys(protractor.Key.ENTER)
                .perform();
        } else if (value == 'DOWN') {
            browser.actions().click(element)
                .sendKeys(protractor.Key.ARROW_DOWN)
                .sendKeys(protractor.Key.ENTER)
                .perform();
        }
    };
    
    that.visibilityWaitingAndClick = function (element) {
        browser.wait(EC.visibilityOf(element), 8000);
        browser.actions().click(element).perform();
    };

    that.visibilityWaitingAndDoubleClick = function (element) {
        browser.wait(EC.visibilityOf(element), 6000);
        browser.actions().doubleClick(element).perform();
    };
}