module.exports = new PublicationTree();

function PublicationTree() {
    var that = this;
    var EC = protractor.ExpectedConditions;

    /**
     * Раскрывает ветку элементов и выделяет внутренний элемент
     * @param {Object} nodeMap - объект с заполненными полями (уровень вложенности = текст узла)
     */
    that.selectBranchInnerNode = function (nodeMap) {
        var branchPromise = Promise.resolve();
        var node;
        var nodeKeys = Object.keys(nodeMap);
        nodeKeys.sort();

        nodeKeys.forEach(function (key) {
            node = that.getNodeElementByLevelNumberAndValue(key, nodeMap[key]);
            branchPromise = branchPromise
                .then(browser
                        .wait(EC.visibilityOf(node),
                            browser.params.visibilityWaitingTime.elementDrawing,
                            nodeMap[key] + ' is not visible.')
                )
                .then(browser
                        .actions()
                        .doubleClick(node)
                        .perform()
                );
        });
        return branchPromise;
    };

    /**
     * Сворачивает ветку элементов
     * @param {Object} nodeMap - объект с заполненными полями (уровень вложенности = текст узла), без внутреннего
     */
    /* TODO: closeBranch - WILL BE DELETED */
    that.closeBranch = function (nodeMap) {
        var branchPromise = Promise.resolve();
        var node;
        var nodeKeys = Object.keys(nodeMap);
        nodeKeys.sort();
        nodeKeys.reverse();
        if (nodeKeys.length > 2) {
            delete nodeKeys[nodeKeys[0]];
        }

        nodeKeys.forEach(function (key) {
            node = that.getNodeElementByLevelNumberAndValue(key, nodeMap[key]);
            branchPromise = branchPromise
                .then(browser
                        .wait(EC.visibilityOf(node),
                            browser.params.visibilityWaitingTime.elementDrawing,
                            nodeMap[key] + ' is not visible.')
                )
                .then(browser
                        .actions()
                        .click(node)
                        .sendKeys(protractor.Key.LEFT)
                        .perform()
                );
        });
        return branchPromise;
    };

    /**
     * Возвращает элемент согласно уровню вложенности и тексту
     * @param {string} levelNumber - уровень вложенности
     * @param {string} value - текстовое значение элемента
     * @returns {ElementFinder} - элемент узла дерева
     */
    that.getNodeElementByLevelNumberAndValue = function (levelNumber, value)  {
        switch (levelNumber) {
            case('level0') :
                return element(by.tagName('body'))
                    .element(by.cssContainingText('.aciTreeText', value));
                break;
            case('level1') :
                return element(by.tagName('body'))
                    .element(by.cssContainingText('.aciTreeLevel0 .aciTreeText', value));
                break;
            case('level2') :
                return element(by.tagName('body'))
                    .element(by.cssContainingText('.aciTreeLevel1 .aciTreeText', value));
                break;
        }
    }
}