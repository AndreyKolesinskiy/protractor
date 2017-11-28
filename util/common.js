module.exports = new CommonUtil();

function CommonUtil() {
    var that = this;
    var EC = protractor.ExpectedConditions;

    /**
     * Ожидает прорисовку элемента и кликает на него
     * @param {element} elem - элемент, на который необходимо нажать
     */
    that.waitVisibilityAndClick = function (elem) {
        browser
            .wait(
                EC.visibilityOf(elem),
                browser.params.visibilityWaitingTime.elementDrawing,
                'cant click, element is not visible.')
            .then(function () {
                return elem.click();
            });
    };
}