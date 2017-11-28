module.exports = Input;

function Input() {
    var that = this;

    /**
     * Устанавливает значение элементу
     * @param {ElementFinder} elem - элемент, которому необходимо присвоить значение
     * @param {string} value - значение
     * @returns {Promise.<void>}
     */
    that.setValue = function (elem, value) {
        return elem.clear()
            .then(function () {
                return elem.sendKeys(value);
            });
    };
}