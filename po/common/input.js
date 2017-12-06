module.exports = Input;

function Input() {
    var that = this;

    /**
     * Устанавливает значение элементу type в выпадающем меню
     * @returns {Promise.<void>}
     */
    that.setType = function (type) {
        return element(by.model('publication.type')).$("[value='" + type + "']").click();
        // return element(by.model('publication.type')).$("[value='" + that.data.testType + "']").click();
    };

    /**
     * Устанавливает значение элементу price в выпадающем меню
     * @returns {Promise.<void>}
     */
    that.setPrice = function (price) {
        return element(by.model('publication.priceType')).$("[value='" + price + "']").click();
        // return element(by.model('publication.priceType')).$("[value='" + that.data.testPrice + "']").click();
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