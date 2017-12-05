module.exports = Input;

function Input(data) {
    var that = this;
    that.data = data;

    /**
     * Устанавливает значение элементу type в выпадающем меню
     * @returns {Promise.<void>}
     */
    that.setType = function () {
        return element(by.model('publication.type')).$("[value='" + that.data.testType + "']").click();
    };

    /**
     * Устанавливает значение элементу price в выпадающем меню
     * @returns {Promise.<void>}
     */
    that.setPrice = function () {
        return element(by.model('publication.priceType')).$("[value='" + that.data.testPrice + "']").click();
    };

    /**
     * Устанавливает значение элементу
     * @param {ElementFinder} elem - элемент, которому необходимо присвоить значение
     * @param {string} value - значение
     * @returns {Promise.<void>}
     */
    that.setElementValue = function (elem, value) {
        return elem.clear()
            .then(function () {
                return elem.sendKeys(value);
            });
    };
}