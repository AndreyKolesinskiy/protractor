module.exports = CommonUtil;

function CommonUtil() {
    var that = this;
    var EC = protractor.ExpectedConditions;

    /* get node by value */
    that.getNodeByValue = function (elementValue) {
        return element(by.tagName('body')).
            element(by.cssContainingText('.aciTreeText', elementValue));
    };
    
    /* select inner node in branch. args: nodeValue, subNodeValue, innerNodeValue */
    that.selectBranchInnerNode = function (nodeValues) {
        var node;
        for (var i=0; i<nodeValues.length; i++) {
            node = element(by.tagName('body'))
                .element(by.cssContainingText('.aciTreeText', nodeValues[i]));
            browser.wait(EC.visibilityOf(node), browser.params.visibilityWaitingTime.elementDrawing);
            browser.actions()
                .doubleClick(node)
                .perform();
        }
    };

    /* close branches. args: nodeValue, subNodeValue */
    /* TODO: closeBranch - WILL BE DELETED */
    that.closeBranch = function (nodeValues) {
        var node;
        for (var i=nodeValues.length-1; i>=0; i--) {
            node = element(by.tagName('body'))
                .element(by.cssContainingText('.aciTreeText', nodeValues[i]));
            browser.actions()
                .click(node)
                .sendKeys(protractor.Key.LEFT)
                .perform();
        }
    };
    
    /* generate random value */
    that.getRandomValue = function () {        
        return Math.round(Math.random() * browser.params.randomValues.multiple + browser.params.randomValues.adds);
    };
        
    /* download file */
    that.saveFile = function (saveButton) {
        var path = browser.params.downloading.path;
        var fs = require('fs');
        
        if (fs.existsSync(path)) {
            fs.unlinkSync(path);
        }
        that.waitVisibilityAndClick(saveButton);
        
        return browser.driver.wait(function() {
            return fs.existsSync(path);
        }, browser.params.visibilityWaitingTime.fileDownloading);        
};
    
    /* focus on element and select value in menu  */
    /* TODO: focusAndSetDropdownMenuValue - WAITING OF NEW MONITOR */
    that.focusAndSetDropdownMenuValue = function () {
        browser.actions()
            .sendKeys(protractor.Key.ENTER)
            .sendKeys(protractor.Key.ARROW_DOWN)
            .sendKeys(protractor.Key.ENTER)
            .perform();
    };

    /* wait of visibility element and click  */    
    that.waitVisibilityAndClick = function (element) {
        browser.wait(EC.visibilityOf(element), browser.params.visibilityWaitingTime.elementDrawing);
        element.click();
    };
    
    /* wait of visibility and select value in menu */
    that.setDropdownMenuValue = function (element, value) {        
        if (value == 'UP') {
            element.click();
            element.sendKeys(protractor.Key.ARROW_UP);
            element.sendKeys(protractor.Key.ENTER);
        } else if (value == 'DOWN') {
            element.click();
            element.sendKeys(protractor.Key.ARROW_DOWN);
            element.sendKeys(protractor.Key.ENTER);
        }
    };

    /* clear and set value of element */
    that.setValue = function (element, value) {
        element.clear();
        element.sendKeys(value);
    };
}