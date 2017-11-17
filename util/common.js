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
            that.waitVisibilityAndDoubleClick(node);
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
        return Math.round(Math.random() * 8999 + 1000);
    };
        
    /* download file and expect of downloading */
    that.saveFile = function (saveButton) {
        var path = 'c:/report.xlsx';
        var fs = require('fs');
                
        if (fs.existsSync(path)) {
            fs.unlinkSync(path);
        }
        that.waitVisibilityAndClick(saveButton);

        browser.driver.wait(function() {
            return fs.existsSync(path);
        }, 30000).then(function () {
            expect(fs.existsSync(path)).toBe(true);            
        });        
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

    /* wait of visibility element and double click  */
    /* TODO: need waiting for productions (lab 1 - step 2) */
    that.waitVisibilityAndDoubleClick = function (element) {
        browser.wait(EC.visibilityOf(element), 6000);
        browser.actions().
            doubleClick(element)
            .perform();
    };

    /* wait of visibility element and click  */
    /* TODO: need waiting for data ('lab 3 - step 3, lab 3 - step 5), saveFile function */
    that.waitVisibilityAndClick = function (element) {
        browser.wait(EC.visibilityOf(element), 8000);
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