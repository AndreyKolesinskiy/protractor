"use strict";

module.exports = Dropdown;

/* Наследование реализовано в рамках обучения */
function Dropdown() {}

/**
 * Устанавливает значение элементу в выпадающем меню
 * @returns {Promise.<void>}
 */
Dropdown.prototype.setValue = function (elem, value) {
    return elem.$("[value='" + value + "']").click();
};
