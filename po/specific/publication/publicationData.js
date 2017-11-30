module.exports = PublicationData;

function PublicationData(data) {
    var that = this;
    that.data = data;

    that.number = element(by.model('publication.name'));
    that.type = element(by.model('publication.type'));
    that.date = element(by.xpath("//input[@placeholder='ET']"));
    that.price = element(by.model('publication.priceType'));
    that.cancelButton = element(by.css('.fa-undo'));
    that.cancelMessage = element(by.cssContainingText('.cp-text-color', 'Noch nichts geändert'));

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