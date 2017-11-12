module.exports = PublicationsPage;

function PublicationsPage() {
    var EC = protractor.ExpectedConditions;
    var that = this;

    that.productionsMenuElement = element(by.partialLinkText('Publikationspflege'));
    that.title = element(by.binding('applicationTitle'));
    
    that.visibilityWaitingAndClick = function (element) {
        browser.wait(EC.visibilityOf(element), 8000);
        browser.actions().click(element).perform();
    };
}