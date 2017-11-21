module.exports = CommonUtil;

function CommonUtil() {
    var that = this;
    var EC = protractor.ExpectedConditions;

    /**
     * Получить элемент узла дерева по текстовому значение
     * @param {string} elementValue - текстовое значение
     * @returns {element} - элемент узла дерева
     */
    that.getNodeByValue = function (elementValue) {
        return element(by.tagName('body')).
            element(by.cssContainingText('.aciTreeText', elementValue));
    };

    /**
     * Раскрывает ветку элементов и выделяет внутренний элемент
     * @param {string[]} nodeValues - массив из названий узлов, начиная с внешнего
     */
    that.selectBranchInnerNode = function (nodeValues) {
        var node;
        for (var i=0; i<nodeValues.length; i++) {
            node = element(by.tagName('body'))
                .element(by.cssContainingText('.aciTreeText', nodeValues[i]));
            browser.wait(EC.visibilityOf(node), browser.params.visibilityWaitingTime.elementDrawing);
            browser.actions()
                .doubleClick(node)
                .perform();
        }
    };

    /**
     * Сворачивает ветку элементов
     * @param {string[]} nodeValues - массив из названий узлов, начиная с внешнего, без внутреннего
     */
    /* TODO: closeBranch - WILL BE DELETED */
    that.closeBranch = function (nodeValues) {
        var node;
        for (var i=nodeValues.length-1; i>=0; i--) {
            node = element(by.tagName('body'))
                .element(by.cssContainingText('.aciTreeText', nodeValues[i]));
            browser.actions()
                .click(node)
                .sendKeys(protractor.Key.LEFT)
                .perform();
        }
    };

    /**
     * Генерирует случайное четырёхзначное число
     * @returns {number} - число
     */
    that.getRandomValue = function () {        
        return Math.round(Math.random() * browser.params.randomValues.multiple + browser.params.randomValues.adds);
    };

    /**
     * Скачивает файл
     * @param {element} saveButton - кнопка, после нажатия которой начинается скачивание
     * @returns {boolean} - статус загрузки
     */
    that.saveFile = function (saveButton) {
        var path = browser.params.downloading.path + browser.params.downloading.fileName;
        var fs = require('fs');
        
        if (fs.existsSync(path)) {
            fs.unlinkSync(path);
        }
        that.waitVisibilityAndClick(saveButton);
        
        return browser.driver.wait(function() {
            return fs.existsSync(path);
        }, browser.params.visibilityWaitingTime.fileDownloading);        
    };

    /**
     * Фокусировка на текущем элементе и присвоение ему значения из выпадающего списка
     */
    /* TODO: focusAndSetDropdownMenuValue - WAITING OF NEW MONITOR */
    that.focusAndSetDropdownMenuValue = function () {
        browser.actions()
            .sendKeys(protractor.Key.ENTER)
            .sendKeys(protractor.Key.ARROW_DOWN)
            .sendKeys(protractor.Key.ENTER)
            .perform();
    };

    /**
     * Ожидает прорисовку элемента и кликает на него
     * @param {element} element - элемент, на который необходимо нажать
     */
    that.waitVisibilityAndClick = function (element) {
        browser.wait(EC.visibilityOf(element), browser.params.visibilityWaitingTime.elementDrawing);
        element.click();
    };

    /**
     * Выбирает значение для элемента в выпадающем списке, согласно направлению относительно текущего
     * @param {element} element - элемент, которому необходимо присвоить значение
     * @param {string} value - направление, относительно текущего значения в списке
     */
    that.setDropdownMenuValue = function (element, value) {        
        if (value === 'UP') {
            element.click();
            element.sendKeys(protractor.Key.ARROW_UP);
            element.sendKeys(protractor.Key.ENTER);
        } else if (value === 'DOWN') {
            element.click();
            element.sendKeys(protractor.Key.ARROW_DOWN);
            element.sendKeys(protractor.Key.ENTER);
        }
    };

    /**
     * Устанавливает значение элементу
     * @param {element} element - элемент, которому необходимо присвоить значение
     * @param {string} value - значение
     */
    that.setValue = function (element, value) {
        element.clear();
        element.sendKeys(value);
    };
}