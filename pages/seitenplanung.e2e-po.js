module.exports = SeitenplanungPage;

function SeitenplanungPage() {
    var that = this;
    var EC = protractor.ExpectedConditions;

    that.productionsMenuElement = element(by.partialLinkText('Publikationspflege'));
    that.title = element(by.binding('applicationTitle'));
    
    that.visibilityWaitingAndClick = function (element) {
        browser.wait(EC.visibilityOf(element), 8000);
        browser.actions().click(element).perform();
    };
}