/*
"use strict";

module.exports = new Input();

function Input() {
    var that = this;

    /!**
     * Устанавливает значение элементу
     * @param {ElementFinder} elem - элемент, которому необходимо присвоить значение
     * @param {string} value - значение
     * @returns {Promise.<void>}
     *!/
    that.setElementValue = function (elem, value) {
        return elem.clear()
            .then(function () {
                return elem.sendKeys(value);
            });
    };
}

*/
