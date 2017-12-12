"use strict";

module.exports = new Util();

function Util() {
    var that = this,
    EC = protractor.ExpectedConditions;

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
     * Ожидает прорисовку элемента и кликает на него
     * @param {ElementFinder} elem - элемент, на который необходимо нажать
     * @param {string} text - название элемента
     * @returns {Promise.<void>}
     */
    that.clickAfterDrawing = function (elem, text) {
        return that.elementVisibilityWait(elem, text)
            .then(function () {
                return elem.click();
            });
    };

    /**
    * Загружает страницу по указанному url
    */
    that.loadPage = function () {
        return browser.get(browser.params.baseUrl);
    };

    /**
     * Удаляет файл, если тот присутствует
     * @param {string} path - расположение файла
     * @returns {Promise} - статус удаления
     */
    that.removeFile = function (path) {
        return Promise.resolve()
            .then(function () {
                var fs = require('fs');
                if (fs.existsSync(path)) {
                    return fs.unlink(path);
                }
            });
    };

    /**
     * Проверяет наличие файла после ожидания загрузки
     * @param {string} path - расположение файла
     * @returns {Promise.<boolean>} - статус загрузки
     */
    that.checkExistFile = function (path) {
        var fs = require('fs');
        return browser
            .driver
            .wait(function () {
                return fs.existsSync(path);
            }, browser
                .params
                .visibilityWaitingTime
                .fileDownloading);
    };
}