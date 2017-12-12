"use strict";

module.exports = Dropdown;

function Dropdown() {}

/**
 * Устанавливает значение элементу в выпадающем меню
 * @returns {Promise.<void>}
 */
Dropdown.prototype.setValue = function (elem, value) {
    return elem.$("[value='" + value + "']").click();
};
