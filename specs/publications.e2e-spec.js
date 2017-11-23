var page = require('../pages/publications.e2e-po.js');
var util = require('../util/common.js');
var _ = require('lodash');
var data = require('../data/publications.e2e-data.json');

describe('lab 4 - publications page', function () {
    var that = this;
    
    beforeAll(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });
    
    it('lab 4, step 1 - should set title value by menu element', function () {
        page.productionsMenuElement.click();
        expect(page.title.getText()).toEqual(data.productionsMenuElement);
    });
    
    it('lab 4, step 2 - should add element', function () {
        page.plusButton.click();
        page.season.sendKeys(data.season);
        page.newNumber.sendKeys(that.getRandomValue());
        util.setDropdownMenuValue(page.type, 'DOWN');
        util.setValue(page.mainDate, data.mainDate);
        util.setValue(page.tradeDate, data.tradeDate);
        util.setDropdownMenuValue(page.priceType, 'DOWN');
        page.description.sendKeys(data.description);
        page.okButton.click();
        expect(that.getNodeByValue(data.addedNode).isPresent()).toBe(true);
    });
    
    it('lab 4, step 3 - should remove element', function () {
        page.trashButton.click();
        page.yesButton.click();
        expect(that.getNodeByValue(data.addedNode).isPresent()).toBe(false);
    });

    /**
     * Получить элемент узла дерева по текстовому значение
     * @param {string} elementValue - текстовое значение
     * @returns {element} - элемент узла дерева
     */
    this.getNodeByValue = function (elementValue) {
        return element(by.tagName('body')).
        element(by.cssContainingText('.aciTreeText', elementValue));
    };

    /**
     * Генерирует случайное четырёхзначное число
     * @returns {number} - число
     */
    that.getRandomValue = function () {
        return Math.round(_.random(browser.params.randomValues.from, browser.params.randomValues.to));
    };

    afterAll(function () {
        util.closeBranch([data.nodes[0], data.nodes[1]]);
    });
});