"use strict";

var _ = require('lodash'),
util = require('../util/common.js'),
data = require('../data/lab-4.e2e-data.json'),

title = require('../po/common/title.js'),
popup = require('../po/common/popup.js'),
mainMenu = require('../po/common/mainMenu.js'),
publicationTree = require('../po/specific/publication/publicationTree.js'),

PublicationPopup = require('../po/specific/publication/publicationPopup.js'),
publicationPopup = new PublicationPopup(data);

describe('lab 4', function () {
    var that = this;
    
    beforeAll(function () {
        util.loadPage();
    });
    
    it('should set title value by menu element', function () {
        mainMenu.open(data.productionsMenuSubElement);
        expect(title.getTitle()).toEqual(data.productionsMenuSubElement);
    });
    
    it('should add element', function () {
        publicationPopup.plusButton.click();
        publicationPopup.season.sendKeys(data.season);
        publicationPopup.newNumber.sendKeys(that.getRandomValue());
        publicationPopup.setType(data.testType);
        publicationPopup.setElementValue(publicationPopup.mainDate, data.mainDate);
        publicationPopup.setElementValue(publicationPopup.tradeDate, data.tradeDate);
        publicationPopup.setPrice(data.testPrice);
        publicationPopup.description.sendKeys(data.description);
        popup.okButton.click();
        expect(that.getNodeByValue(data.addedNode).isPresent()).toBe(true);
    });
    
    it('should remove element', function () {
        publicationPopup.trashButton.click();
        popup.yesButton.click();
        expect(that.getNodeByValue(data.addedNode).isPresent()).toBe(false);
    });

    /**
     * Получить элемент узла дерева по текстовому значение
     * @param {string} elementValue - текстовое значение
     * @returns {ElementFinder} - элемент узла дерева
     */
    this.getNodeByValue = function (elementValue) {
        return element(by.tagName('body'))
            .element(by.cssContainingText('.aciTreeText', elementValue));
    };

    /**
     * Генерирует случайное четырёхзначное число в заданном диапазоне
     * @returns {number} - число
     */
    that.getRandomValue = function () {
        return Math.round(_.random(browser.params.randomValues.from, browser.params.randomValues.to));
    };

    afterAll(function () {
        publicationTree.openCloseBranch(data.outerNodes, false);
    });
});