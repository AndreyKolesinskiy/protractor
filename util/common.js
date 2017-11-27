module.exports = new CommonUtil();

var publicationTree = require('../po/specific/publication/publicationTree.js');

function CommonUtil() {
    var that = this;
    var EC = protractor.ExpectedConditions;

    /**
     * Раскрывает ветку элементов и выделяет внутренний элемент
     * @param {string[]} nodeValues - массив из названий узлов, начиная с внешнего
     */
    that.selectBranchInnerNode = function (nodeValues) {
        var node;

        nodeValues.forEach(function (item, i) {
            node = publicationTree.getNodeElementByLevelNumberAndValue(i, item);
            browser
                .wait(
                    EC.visibilityOf(node),
                    browser.params.visibilityWaitingTime.elementDrawing,
                    item + ' is not visible.')
                .then(
                    browser
                        .actions()
                        .doubleClick(node)
                        .perform()
                );
            }
        );
    };

    /**
     * Сворачивает ветку элементов
     * @param {string[]} nodeValues - массив из названий узлов, начиная с внешнего, без внутреннего
     */
    /* TODO: closeBranch - WILL BE DELETED */
    that.closeBranch = function (nodeValues) {
        var node;
        nodeValues = nodeValues.reverse();
        nodeValues.forEach(function (item, i) {
            node = publicationTree.getNodeElementByLevelNumberAndValue(i, item);
            browser
                .actions()
                .click(node)
                .sendKeys(protractor.Key.LEFT)
                .perform();
            }
        );
    };

    /**
     * Ожидает прорисовку элемента и кликает на него
     * @param {element} elem - элемент, на который необходимо нажать
     */
    that.waitVisibilityAndClick = function (elem) {
        browser
            .wait(
                EC.visibilityOf(elem),
                browser.params.visibilityWaitingTime.elementDrawing,
                'cant click, element is not visible.')
            .then(elem.click());
    };

    /**
     * Выбирает значение для элемента в выпадающем списке, согласно направлению относительно текущего
     * @param {element} elem - элемент, которому необходимо присвоить значение
     * @param {string} value - направление, относительно текущего значения в списке
     */
    that.setDropdownMenuValue = function (elem, value) {
        if (value === 'UP') {
            elem.click()
                .then(function () {
                    return elem.sendKeys(protractor.Key.ARROW_UP);
                })
                .then(function () {
                    return elem.sendKeys(protractor.Key.ENTER);
                });
        } else if (value === 'DOWN') {
            elem.click()
                .then(function () {
                    return elem.sendKeys(protractor.Key.ARROW_DOWN);
                })
                .then(function () {
                    return elem.sendKeys(protractor.Key.ENTER);
                });
        }
    };

    /**
     * Устанавливает значение элементу
     * @param {element} elem - элемент, которому необходимо присвоить значение
     * @param {string} value - значение
     */
    that.setValue = function (elem, value) {
        elem.clear()
            .then(function () {
                return elem.sendKeys(value);
            });
    };
}