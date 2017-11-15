module.exports = PublicationsPage;

function PublicationsPage() {
    var EC = protractor.ExpectedConditions;
    var that = this;

    that.productionsMenuElement = element(by.partialLinkText('Publikationspflege'));
    that.title = element(by.binding('applicationTitle'));

    that.plusButton = element(by.css('.glyphicon-plus'));
    that.minusButton = element(by.css('.glyphicon-minus'));
    that.season = element(by.model('newPublication.season'));
    
    that.newNumber = element(by.model('newPublication.name'));
    that.type = element(by.model('newPublication.type'));
    
    that.hauptDate = element(by.css('.modal-content'))
        .all(by.model('dateItem')).first();
    that.warenDate = element(by.css('.modal-content'))
        .all(by.model('dateItem')).last();
    that.priceType = element(by.model('newPublication.priceType'));
    that.description = element(by.model('newPublication.description'));
    that.okButton = element(by.buttonText('Anlegen'));

    that.nod = element(by.tagName('body')).
        element(by.cssContainingText('.aciTreeText', '31, Frühling/Sommer 2011'));
    that.sub1 = element(by.tagName('body')).
        element(by.cssContainingText('.aciTreeText', 'Inszenierungspunkt'));
    that.sub2 = element(by.tagName('body')).
        element(by.cssContainingText('.aciTreeText', 'Schwarzpreis ET: 05.05.2017'));

    that.trashButton = element(by.css('.glyphicon-trash'));
    that.yesButton = element(by.buttonText('Ja'));
    
    that.visibilityWaitingAndClick = function (element) {
        browser.wait(EC.visibilityOf(element), 8000);
        browser.actions().click(element).perform();
    };

    that.changeElementMenu = function (element, value) {
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

    that.clearAndEnterValue = function (element, value) {
        element.clear();
        element.sendKeys(value);
    };
}