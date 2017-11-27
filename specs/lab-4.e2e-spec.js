var _ = require('lodash');
var data = require('../data/lab-4.e2e-data.json');

var pageTitle = require('../po/common/title.js');
var popup = require('../po/common/popups.js');
var mainMenu = require('../po/common/menu.js');
var publicationTree = require('../po/specific/publication/publicationTree.js');

var ButtonPanels = require('../po/common/buttons.js');
var PublicationAddingPopup = require('../po/specific/publication/publicationAddingPopup.js');

var buttonPanels = new ButtonPanels(data);
var publicationAddingPopup = new PublicationAddingPopup();


describe('lab 4', function () {
    var that = this;
    
    beforeAll(function () {
        browser.get(browser.params.baseUrl);
    });
    
    it('should set title value by menu element', function () {
        mainMenu.open(data.productionsMenuSubElement);
        expect(pageTitle.title.getText()).toEqual(data.productionsMenuSubElement);
    });
    
    it('should add element', function () {
        buttonPanels.plusButton.click();
        publicationAddingPopup.season.sendKeys(data.season);
        publicationAddingPopup.newNumber.sendKeys(that.getRandomValue());
        publicationAddingPopup.setDropdownMenuValue(publicationAddingPopup.type, 'DOWN');
        publicationAddingPopup.setValue(publicationAddingPopup.mainDate, data.mainDate);
        publicationAddingPopup.setValue(publicationAddingPopup.tradeDate, data.tradeDate);
        publicationAddingPopup.setDropdownMenuValue(publicationAddingPopup.priceType, 'DOWN');
        publicationAddingPopup.description.sendKeys(data.description);
        popup.okButton.click();
        expect(that.getNodeByValue(data.addedNode).isPresent()).toBe(true);
    });
    
    it('should remove element', function () {
        buttonPanels.trashButton.click();
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