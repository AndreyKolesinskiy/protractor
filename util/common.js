module.exports = CommonUtil;

function CommonUtil() {
    var that = this;
    var EC = protractor.ExpectedConditions;

    that.openBranch = function (node, subNodeLevel1) {
        that.visibilityWaitingAndDoubleClick(node);
        that.visibilityWaitingAndDoubleClick(subNodeLevel1);        
    };

    that.closeBranch = function (node, subNodeLevel1) {
        browser.actions().click(subNodeLevel1).sendKeys(protractor.Key.LEFT).perform();
        browser.actions().click(node).sendKeys(protractor.Key.LEFT).perform();
    };
    
    that.visibilityWaitingAndDoubleClick = function (element) {
        browser.wait(EC.visibilityOf(element), 6000);
        browser.actions().doubleClick(element).perform();
    };

    that.visibilityWaitingAndClick = function (element) {
        browser.wait(EC.visibilityOf(element), 8000);
        browser.actions().click(element).perform();
    };
    
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

    that.clearAndEnterValue = function (element, value) {
        element.clear();
        element.sendKeys(value);
    };
}