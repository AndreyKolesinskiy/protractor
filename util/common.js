module.exports = new CommonUtil();

function CommonUtil() {
    var that = this;
    var EC = protractor.ExpectedConditions;

    /**
     * Ожидает прорисовку элемента и кликает на него
     * @param {ElementFinder} elem - элемент, на который необходимо нажать
     * @returns {Promise.<void>}
     */
    that.waitVisibilityAndClick = function (elem) {
        return browser
            .wait(
                EC.visibilityOf(elem),
                browser.params.visibilityWaitingTime.elementDrawing,
                'cant click, element is not visible.')
            .then(function () {
                return elem.click();
            });
    };
}