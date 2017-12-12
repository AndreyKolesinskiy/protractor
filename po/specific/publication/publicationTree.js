"use strict";

module.exports = new PublicationTree();

function PublicationTree() {
    var that = this,
    EC = protractor.ExpectedConditions;

    that.saveFileButton = element(by.css('.glyphicon-file'));

    /**
     * Кликает по элементу после ожидания прорисовки.
     * Предназначен для заполнения полей панели с данными для выбранного элемента.
     * @param {string} elementText - текст элемента меню
     * @returns {Promise.<void>}
     */
    that.toggleInnerNode = function (elementText) {
        var elem = $$('.aciTreeLevel1 .aciTreeText')
            .filter(function (elem) {
                return elem.getText().then(function(text) {
                    return text === elementText;
                });
            }).first();

        return that.elementVisibilityWait(elem, elem)
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
     * Отправка кнопки влево элементу (для закрытия ветки)
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
     * Ожидание прорисовки элемента
     * @param {ElementFinder} elem - элемент
     * @param {string} text - название элемента
     * @returns {Promise.<void>}
     */
    that.elementVisibilityWait = function (elem, text) {
        return browser.wait(
            EC.visibilityOf(elem),
            browser.params.visibilityWaitingTime.elementDrawing,
            text + ' is not visible.'
        )
    };

    /**
     * Раскрывает\ сворачивает ветку элементов в зависимости от флага.
     * @param {Object} nodeMap - объект с заполненными полями (уровень вложенности = текст узла)
     * @param {boolean} openFlag - флаг открытия-закрытия ветки
     * @returns {Promise}
     */
    that.toggleBranch = function (nodeMap, openFlag) {
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
                    .then(that.elementVisibilityWait(
                        that.getNodeByLevelAndText(key, nodeMap[key]),
                        nodeMap[key]
                    ))
                    /* раскрытие ветки по двойному клику */
                    .then(that.elementDoubleClick(
                        that.getNodeByLevelAndText(key, nodeMap[key])
                    ));
            } else {
                branchPromise = branchPromise
                    .then(that.elementVisibilityWait(
                        that.getNodeByLevelAndText(key, nodeMap[key]),
                        nodeMap[key]
                    ))
                    /* сворачивание ветки по нажатию кнопки влево */
                    .then(that.elementSendKeyLeft(
                        that.getNodeByLevelAndText(key, nodeMap[key])
                    ));
            }
        });
        return branchPromise;
    };

    /**
     * Возвращает элемент согласно уровню вложенности и тексту.
     * Маркеры level0, level1 условные, для мапы.  
     * @param {string} level - уровень вложенности
     * @param {string} text - текстовое значение элемента
     * @returns {ElementFinder} - элемент узла дерева
     */
    that.getNodeByLevelAndText = function (level, text)  {
        switch (level) {
            case('level0') :
                return element(by.cssContainingText('.aciTreeText', text));
                break;
            case('level1') :
                return element(by.cssContainingText('.aciTreeLevel0 .aciTreeText', text));
                break;
        }
    };

    /**
     * Возвращает элемент узла дерева по текстовому значению.
     * @param {string} text - текстовое значение
     * @returns {ElementFinder} - элемент узла дерева
     */
    this.getNodeByText = function (text) {
        return element(by.cssContainingText('.aciTreeText', text));
    };
}