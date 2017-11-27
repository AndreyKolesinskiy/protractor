module.exports = new CommonUtil();

function CommonUtil() {
    var that = this;
    var EC = protractor.ExpectedConditions;

    /**
     * Раскрывает ветку элементов и выделяет внутренний элемент
     * @param {Object} nodeMap - массив из названий узлов, начиная с внешнего
     */
    that.selectBranchInnerNode = function (nodeMap) {
        var node;
        var nodeKeys = Object.keys(nodeMap);
        nodeKeys.sort();

        nodeKeys.forEach(function (key) {
            node = publicationTree.getNodeElementByLevelNumberAndValue(key, nodeMap[key]);
            browser
                .wait(
                    EC.visibilityOf(node),
                    browser.params.visibilityWaitingTime.elementDrawing,
                    nodeMap[key] + ' is not visible.')
                .then(
                    browser
                        .actions()
                        .doubleClick(node)
                        .perform()
                );
        });
    };

    /**
     * Сворачивает ветку элементов
     * @param {Object} nodeMap - массив из названий узлов, начиная с внешнего, без внутреннего
     */
    /* TODO: closeBranch - WILL BE DELETED */
    that.closeBranch = function (nodeMap) {
        var node;
        var nodeKeys = Object.keys(nodeMap);
        nodeKeys.sort();
        nodeKeys.reverse();
        if (nodeKeys.length > 2) {
            delete nodeKeys[nodeKeys[0]];
        }

        nodeKeys.forEach(function (key) {
            node = publicationTree.getNodeElementByLevelNumberAndValue(key, nodeMap[key]);
            browser
                .wait(
                    EC.visibilityOf(node),
                    browser.params.visibilityWaitingTime.elementDrawing,
                    nodeMap[key] + ' is not visible.')
                .then(
                    browser
                        .actions()
                        .click(node)
                        .sendKeys(protractor.Key.LEFT)
                        .perform()
                );
        });
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
}