module.exports = Dropdown;

function Dropdown() {
    var that = this;

    /**
     * Выбирает значение для элемента в выпадающем списке, согласно направлению относительно текущего
     * @param {ElementFinder} elem - элемент, которому необходимо присвоить значение
     * @param {boolean} upFlag - направление, относительно текущего значения в списке
     * @returns {Promise.<void>}
     */
    that.setDropdownValueToUpper = function (elem, upFlag) {
        return elem.click()
            .then(function () {
                if (upFlag) {
                    return elem.sendKeys(protractor.Key.ARROW_UP);
                } else {
                    return elem.sendKeys(protractor.Key.ARROW_DOWN);
                }
            })
            .then(function () {
                return elem.sendKeys(protractor.Key.ENTER);
            });
    };
}