module.exports = new CommonUtil();

function CommonUtil() {
    var that = this;
    var EC = protractor.ExpectedConditions;

    /**
     * Раскрывает ветку элементов и выделяет внутренний элемент
     * @param {string[]} nodeValues - массив из названий узлов, начиная с внешнего
     */
    that.selectBranchInnerNode = function (nodeValues) {
        var node;
        nodeValues.forEach(function (item) {
            node = element(by.tagName('body'))
                .element(by.cssContainingText('.aciTreeText', item));
            browser.wait(EC.visibilityOf(node), browser.params.visibilityWaitingTime.elementDrawing, item + ' is not visible.');
            browser.actions()
                .doubleClick(node)
                .perform();
        });
    };

    /**
     * Сворачивает ветку элементов
     * @param {string[]} nodeValues - массив из названий узлов, начиная с внешнего, без внутреннего
     */
    /* TODO: closeBranch - WILL BE DELETED */
    that.closeBranch = function (nodeValues) {
        var node;
        var reverseValues = nodeValues.reverse();
        reverseValues.forEach(function (item) {
            node = element(by.tagName('body'))
                .element(by.cssContainingText('.aciTreeText', item));
            browser.actions()
                .click(node)
                .sendKeys(protractor.Key.LEFT)
                .perform();
        });
    };

    /**
     * Ожидает прорисовку элемента и кликает на него
     * @param {element} element - элемент, на который необходимо нажать
     */
    that.waitVisibilityAndClick = function (element) {
        browser.wait(EC.visibilityOf(element), browser.params.visibilityWaitingTime.elementDrawing, element + ' is not visible.');
        element.click();
    };

    /**
     * Выбирает значение для элемента в выпадающем списке, согласно направлению относительно текущего
     * @param {element} element - элемент, которому необходимо присвоить значение
     * @param {string} value - направление, относительно текущего значения в списке
     */
    that.setDropdownMenuValue = function (element, value) {        
        if (value === 'UP') {
            element.click();
            element.sendKeys(protractor.Key.ARROW_UP);
            element.sendKeys(protractor.Key.ENTER);
        } else if (value === 'DOWN') {
            element.click();
            element.sendKeys(protractor.Key.ARROW_DOWN);
            element.sendKeys(protractor.Key.ENTER);
        }
    };

    /**
     * Устанавливает значение элементу
     * @param {element} element - элемент, которому необходимо присвоить значение
     * @param {string} value - значение
     */
    that.setValue = function (element, value) {
        element.clear();
        element.sendKeys(value);
    };
}