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
        for (var i = 0; i < nodeValues.length; i++) {
            if (i === 0) {
                node = element(by.tagName('body'))
                    .element(by.cssContainingText('.aciTreeText', nodeValues[i]));
            } else if (i > 0) {
                node = element(by.tagName('body'))
                    .element(by.cssContainingText('.aciTreeBranch .aciTreeText', nodeValues[i]));
            }
            browser.wait(EC.visibilityOf(node), browser.params.visibilityWaitingTime.elementDrawing, nodeValues[i] + ' is not visible.')
                .then(
                    browser.actions()
                        .doubleClick(node)
                        .perform()
                );
        }
    };

    /**
     * Сворачивает ветку элементов
     * @param {string[]} nodeValues - массив из названий узлов, начиная с внешнего, без внутреннего
     */
    /* TODO: closeBranch - WILL BE DELETED */
    that.closeBranch = function (nodeValues) {
        var node;
        for (var i = nodeValues.length-1; i >= 0 ; i--) {
            if (i === 0) {
                node = element(by.tagName('body'))
                    .element(by.cssContainingText('.aciTreeText', nodeValues[i]));
            } else if (i > 0) {
                node = element(by.tagName('body'))
                    .element(by.cssContainingText('.aciTreeBranch .aciTreeText', nodeValues[i]));
            }
            browser.actions()
                .click(node)
                .sendKeys(protractor.Key.LEFT)
                .perform();
        }
    };

    /**
     * Ожидает прорисовку элемента и кликает на него
     * @param {element} element - элемент, на который необходимо нажать
     */
    that.waitVisibilityAndClick = function (element) {
        browser.wait(EC.visibilityOf(element), browser.params.visibilityWaitingTime.elementDrawing, 'cant click, element is not visible.')
            .then(element.click());
    };

    /**
     * Выбирает значение для элемента в выпадающем списке, согласно направлению относительно текущего
     * @param {element} element - элемент, которому необходимо присвоить значение
     * @param {string} value - направление, относительно текущего значения в списке
     */
    that.setDropdownMenuValue = function (element, value) {        
        if (value === 'UP') {
            element.click()
                .then(function () {
                    return element.sendKeys(protractor.Key.ARROW_UP);
                })
                .then(function () {
                    return element.sendKeys(protractor.Key.ENTER);
                });
        } else if (value === 'DOWN') {
            element.click()
                .then(function () {
                    return element.sendKeys(protractor.Key.ARROW_DOWN);
                })
                .then(function () {
                    return element.sendKeys(protractor.Key.ENTER);
                });
        }
    };

    /**
     * Устанавливает значение элементу
     * @param {element} element - элемент, которому необходимо присвоить значение
     * @param {string} value - значение
     */
    that.setValue = function (element, value) {
        element.clear()
            .then(function () {
                return element.sendKeys(value);
            });
    };
}