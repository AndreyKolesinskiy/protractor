module.exports = new PublicationTree();

function PublicationTree() {
    var that = this,
    EC = protractor.ExpectedConditions;

    that.saveFileButton = element(by.css('.glyphicon-file'));

    /**
     * Кликает по элементу после ожидания прорисовки
     * @param {string} value - текст элемента меню
     * @returns {Promise.<void>}
     */
    that.nodeDoubleClick = function (value) {
        var node = element(by.tagName('body'))
            .element(by.cssContainingText('.aciTreeLevel1 .aciTreeText', value));
        return browser.wait(
                EC.visibilityOf(node),
                browser.params.visibilityWaitingTime.elementDrawing,
                node + ' is not visible.')
            .then(function () {
                    return browser
                        .actions()
                        .doubleClick(node)
                        .perform()
            });
    };

    /**
     * Раскрывает\ сворачивает ветку элементов в зависимости от флага
     * @param {Object} nodeMap - объект с заполненными полями (уровень вложенности = текст узла)
     * @param {boolean} openFlag - флаг открытия-закрытия ветки
     * @returns {Promise}
     */
    that.openCloseBranch = function (nodeMap, openFlag) {
        var branchPromise = Promise.resolve(),
            node,
            nodeKeys = Object.keys(nodeMap).sort();

        /* смена очерёдности */
        if (!openFlag) {
            nodeKeys.reverse();
        }

        /* открытие\закрытие веток */
        nodeKeys.forEach(function (key) {
            if (openFlag) {
                branchPromise = branchPromise
                    .then(function () {
                        node = that.getNodeElementByLevelNumberAndValue(key, nodeMap[key]);
                        return browser.wait(
                            EC.visibilityOf(node),
                            browser.params.visibilityWaitingTime.elementDrawing,
                            nodeMap[key] + ' is not visible.')
                    })
                    .then(function () {
                        node = that.getNodeElementByLevelNumberAndValue(key, nodeMap[key]);
                        return browser
                            .actions()
                            .doubleClick(node)
                            .perform()
                    })
                    ;
            } else {
                branchPromise = branchPromise
                    .then(function () {
                        node = that.getNodeElementByLevelNumberAndValue(key, nodeMap[key]);
                        return browser.wait(
                            EC.visibilityOf(node),
                            browser.params.visibilityWaitingTime.elementDrawing,
                            nodeMap[key] + ' is not visible.')
                    })
                    .then(function () {
                        node = that.getNodeElementByLevelNumberAndValue(key, nodeMap[key]);
                        return browser
                            .actions()
                            .click(node)
                            .sendKeys(protractor.Key.LEFT)
                            .perform()
                    });
            }
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
        }
    }
}