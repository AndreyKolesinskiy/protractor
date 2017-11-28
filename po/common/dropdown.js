module.exports = Dropdown;

function Dropdown() {
    var that = this;

    /**
     * Выбирает значение для элемента в выпадающем списке, согласно направлению относительно текущего
     * @param {element} elem - элемент, которому необходимо присвоить значение
     * @param {string} value - направление, относительно текущего значения в списке
     */
    that.setDropdownMenuValue = function (elem, value) {
        if (value === 'UP') {
            elem.click()
                .then(function () {
                    return elem.sendKeys(protractor.Key.ARROW_UP);
                })
                .then(function () {
                    return elem.sendKeys(protractor.Key.ENTER);
                });
        } else if (value === 'DOWN') {
            elem.click()
                .then(function () {
                    return elem.sendKeys(protractor.Key.ARROW_DOWN);
                })
                .then(function () {
                    return elem.sendKeys(protractor.Key.ENTER);
                });
        }
    };
}