module.exports = CommonUtil;

function CommonUtil() {
    var that = this;
    var EC = protractor.ExpectedConditions;

    that.openBranch = function (node, subNodeLevel1) {
        that.visibilityWaitingAndDoubleClick(node);
        that.visibilityWaitingAndDoubleClick(subNodeLevel1);        
    };
    
    that.visibilityWaitingAndDoubleClick = function (element) {
        browser.wait(EC.visibilityOf(element), 6000);
        browser.
            actions().
            doubleClick(element)
            .perform();
    };

    that.closeBranch = function (node, subNodeLevel1) {
        browser.actions().click(subNodeLevel1).sendKeys(protractor.Key.LEFT).perform();
        browser.actions().click(node).sendKeys(protractor.Key.LEFT).perform();
    };
}