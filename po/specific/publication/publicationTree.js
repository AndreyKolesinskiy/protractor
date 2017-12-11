"use strict";

module.exports = new PublicationTree();

function PublicationTree() {
    var that = this,
    EC = protractor.ExpectedConditions;

    that.saveFileButton = element(by.css('.glyphicon-file'));

    /**
     * Кликает по элементу после ожидания прорисовки
     * @param {string} elementText - текст элемента меню
     * @returns {Promise.<void>}
     */
    that.nodeDoubleClick = function (elementText) {
        var elem = element(by.tagName('body'))
            .all(by.css('.aciTreeLevel1 .aciTreeText'))
            .filter(function (elem) {
                return elem.getText().then(function(text) {
                    return text === elementText;
                });
            }).first();

        return that.elementVisibilityWaiting(elem, elem)
            .then(that.elementDoubleClick(elem));
    };

    /**
     * Двойной клик по элементу
     * @param {ElementFinder} elem - элемент
     * @returns {Promise.<void>}
     */
    that.elementDoubleClick = function (elem) {
            return browser
                .actions()
                .doubleClick(elem)
                .perform()
    };

    /**
     * Отправка кнопки влево элементу
     * @param {ElementFinder} elem - элемент
     * @returns {Promise.<void>}
     */
    that.elementSendKeyLeft = function (elem) {
        return browser
            .actions()
            .click(elem)
            .sendKeys(protractor.Key.LEFT)
            .perform()
    };

    /**
     * Отправка кнопки влево элементу
     * @param {ElementFinder} elem - элемент
     * @param {string} elementName - название элемента
     * @returns {Promise.<void>}
     */
    that.elementVisibilityWaiting = function (elem, elementName) {
        return browser.wait(
            EC.visibilityOf(elem),
            browser.params.visibilityWaitingTime.elementDrawing,
            elementName + ' is not visible.'
        )
    };

    /**
     * Раскрывает\ сворачивает ветку элементов в зависимости от флага
     * @param {Object} nodeMap - объект с заполненными полями (уровень вложенности = текст узла)
     * @param {boolean} openFlag - флаг открытия-закрытия ветки
     * @returns {Promise}
     */
    that.openCloseBranch = function (nodeMap, openFlag) {
        var branchPromise = Promise.resolve(),
            nodeKeys = Object.keys(nodeMap).sort();

        /* смена очерёдности */
        if (!openFlag) {
            nodeKeys.reverse();
        }

        /* открытие\закрытие веток */
        nodeKeys.forEach(function (key) {
            if (openFlag) {
                branchPromise = branchPromise
                    .then(that.elementVisibilityWaiting(
                        that.getNodeElementByLevelNumberAndValue(key, nodeMap[key]),
                        nodeMap[key]
                    ))
                    .then(that.elementDoubleClick(
                        that.getNodeElementByLevelNumberAndValue(key, nodeMap[key])
                    ));
            } else {
                branchPromise = branchPromise
                    .then(that.elementVisibilityWaiting(
                        that.getNodeElementByLevelNumberAndValue(key, nodeMap[key]),
                        nodeMap[key]
                    ))
                    .then(that.elementSendKeyLeft(
                        that.getNodeElementByLevelNumberAndValue(key, nodeMap[key])
                    ));
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