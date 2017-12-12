"use strict";

module.exports = new Menu();

var util = require('../../util/util.js');

function Menu() {
    var that = this;

    /**
     * Кликает по элементу меню после ожидания прорисовки
     * @param {string} text - текст элемента меню
     * @returns {Promise.<void>}
     */
    that.open = function (text) {
        return util.clickAfterDrawing(element(by.partialLinkText(text)), text);
    }
}