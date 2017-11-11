module.exports = ProductionsPage;

function ProductionsPage() {
    var EC = protractor.ExpectedConditions;
    var that = this;

    that.cancelButton = element(by.css('.fa-undo'));
    that.cancelMessage = element(by.cssContainingText('.cp-text-color', 'Noch nichts geändert'));

    that.productionsMenuElement = element(by.partialLinkText('Publikationspflege'));
    that.title = element(by.binding('applicationTitle'));
    that.number = element(by.model('publication.name'));
    that.type = element(by.model('publication.type'));
    that.date = element(by.model('dateItem'));
    that.price = element(by.model('publication.priceType'));
    
    that.nod = element(by.tagName('body')).
        element(by.cssContainingText('.aciTreeText', '40, Herbst/Winter 2015/2016'));
    that.sub1 = element(by.tagName('body')).
        element(by.cssContainingText('.aciTreeText', 'Prospekt'));
    that.sub2 = element(by.tagName('body')).
        element(by.cssContainingText('.aciTreeText', '6556 Schwarzpreis ET: 02.03.2017'));
    
    that.visibilityWaitingAndDoubleClick = function (element) {
        browser.wait(EC.visibilityOf(element), 6000);
        browser.actions().doubleClick(element).perform();
    };

    that.clearAndEnterValue = function (element, value) {
        element.clear();
        element.sendKeys(value);
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
}