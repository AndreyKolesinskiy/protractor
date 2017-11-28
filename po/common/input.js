module.exports = Input;

function Input() {
    var that = this;

    /**
     * Устанавливает значение элементу
     * @param {element} elem - элемент, которому необходимо присвоить значение
     * @param {string} value - значение
     */
    that.setValue = function (elem, value) {
        elem.clear()
            .then(function () {
                return elem.sendKeys(value);
            });
    };
}