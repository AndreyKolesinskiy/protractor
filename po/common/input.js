"use strict";

module.exports = Input;

function Input() {}

/**
 * Устанавливает значение элементу type в выпадающем меню
 * @returns {Promise.<void>}
 */
Input.prototype.setType = function (type) {
    return element(by.model('publication.type')).$("[value='" + type + "']").click();
};

/**
 * Устанавливает значение элементу price в выпадающем меню
 * @returns {Promise.<void>}
 */
Input.prototype.setPrice = function (price) {
    return element(by.model('publication.priceType')).$("[value='" + price + "']").click();
};

/**
 * Устанавливает значение элементу
 * @param {ElementFinder} elem - элемент, которому необходимо присвоить значение
 * @param {string} value - значение
 * @returns {Promise.<void>}
 */
Input.prototype.setElementValue = function (elem, value) {
    return elem.clear()
        .then(function () {
            return elem.sendKeys(value);
        });
};