var _ = require('lodash');
var data = require('../data/lab-4.e2e-data.json');

var title = require('../po/common/title.js');
var popup = require('../po/common/popup.js');
var menu = require('../po/common/menu.js');
var publicationTree = require('../po/specific/publication/publicationTree.js');

var Button = require('../po/common/button.js');
var PublicationPopup = require('../po/specific/publication/publicationPopup.js');

var button = new Button(data);
var publicationPopup = new PublicationPopup();


describe('lab 4', function () {
    var that = this;
    
    beforeAll(function () {
        browser.get(browser.params.baseUrl);
    });
    
    it('should set title value by menu element', function () {
        menu.open(data.productionsMenuSubElement);
        expect(title.title.getText()).toEqual(data.productionsMenuSubElement);
    });
    
    it('should add element', function () {
        button.plusButton.click();
        publicationPopup.season.sendKeys(data.season);
        publicationPopup.newNumber.sendKeys(that.getRandomValue());
        publicationPopup.setDropdownMenuValue(publicationPopup.type, 'DOWN');
        publicationPopup.setValue(publicationPopup.mainDate, data.mainDate);
        publicationPopup.setValue(publicationPopup.tradeDate, data.tradeDate);
        publicationPopup.setDropdownMenuValue(publicationPopup.priceType, 'DOWN');
        publicationPopup.description.sendKeys(data.description);
        popup.okButton.click();
        expect(that.getNodeByValue(data.addedNode).isPresent()).toBe(true);
    });
    
    it('should remove element', function () {
        button.trashButton.click();
        popup.yesButton.click();
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
        publicationTree.closeBranch(data.nodes);
    });
});