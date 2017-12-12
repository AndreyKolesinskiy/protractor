"use strict";

module.exports = new MainMenu();

var util = require('../../util/util.js');

function MainMenu() {
    var that = this;

    /**
     * Кликает по элементу после ожидания прорисовки
     * @param {string} menuText - текст элемента меню
     * @returns {Promise.<void>}
     */
    that.open = function (menuText) {
        return util.clickAfterDrawing(element(by.partialLinkText(menuText)));
    }
}