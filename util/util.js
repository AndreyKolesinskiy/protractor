"use strict";

module.exports = new Util();

function Util() {
    var that = this,
    EC = protractor.ExpectedConditions;

    /**
     * Ожидает прорисовку элемента и кликает на него
     * @param {ElementFinder} elem - элемент, на который необходимо нажать
     * @returns {Promise.<void>}
     */
    that.clickAfterDrawing = function (elem) {
        return browser
            .wait(
                EC.visibilityOf(elem),
                browser.params.visibilityWaitingTime.elementDrawing,
                'cant click, element is not visible.'
            )
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
     * Проверяет наличие файла после загрузки
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