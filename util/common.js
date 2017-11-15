module.exports = CommonUtil;

function CommonUtil() {
    var that = this;
    var EC = protractor.ExpectedConditions;

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
        that.visibilityWaitingAndClick(saveButton);

        browser.driver.wait(function() {
            return fs.existsSync(path);
        }, 30000).then(function () {
            expect(fs.existsSync(path)).toBe(true);            
        });        
    };
    
    /* focus on element and select value in menu  */
    that.focusAndSelectMenuElement = function () {
        browser.actions()
            .sendKeys(protractor.Key.ENTER)
            .sendKeys(protractor.Key.ARROW_DOWN)
            .sendKeys(protractor.Key.ENTER)
            .perform();
    };
    
    /* open sub branch */
    that.openBranch = function (node, subNodeLevel1) {
        that.visibilityWaitingAndDoubleClick(node);
        that.visibilityWaitingAndDoubleClick(subNodeLevel1);        
    };

    /* close branches  */
    that.closeBranch = function (node, subNodeLevel1) {
        browser.actions()
            .click(subNodeLevel1)
            .sendKeys(protractor.Key.LEFT)
            .perform();
        browser.actions()
            .click(node)
            .sendKeys(protractor.Key.LEFT)
            .perform();
    };
    
    /* wait of visibility element and double click  */
    that.visibilityWaitingAndDoubleClick = function (element) {
        browser.wait(EC.visibilityOf(element), 6000);
        browser.actions().doubleClick(element).perform();
    };

    /* wait of visibility element and click  */
    that.visibilityWaitingAndClick = function (element) {
        browser.wait(EC.visibilityOf(element), 8000);
        browser.actions()
            .click(element)
            .perform();
    };
    
    /* wait of visibility and select value in menu */
    that.changeElementMenu = function (element, value) {
        browser.wait(EC.visibilityOf(element), 8000);
        if (value == 'UP') {
            browser.actions()
                .click(element)
                .sendKeys(protractor.Key.ARROW_UP)
                .sendKeys(protractor.Key.ENTER)
                .perform();
        } else if (value == 'DOWN') {
            browser.actions()
                .click(element)
                .sendKeys(protractor.Key.ARROW_DOWN)
                .sendKeys(protractor.Key.ENTER)
                .perform();
        }
    };

    /* clear and set value of element */
    that.clearAndEnterValue = function (element, value) {
        element.clear();
        element.sendKeys(value);
    };
}