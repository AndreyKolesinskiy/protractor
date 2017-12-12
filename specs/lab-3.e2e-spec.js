"use strict";

var util = require('../util/util.js'),
data = require('../data/lab-3.e2e-data.json'),

title = require('../po/common/title.js'),
popup = require('../po/common/popup.js'),
seasonData = require('../po/specific/season/seasonData.js'),
privilegeTable = require('../po/specific/privilege/privilegeTable.js'),
privilegePopup = require('../po/specific/privilege/privilegePopup.js'),
privilegeData = require('../po/specific/privilege/privilegeData.js'),
menu = require('../po/common/menu.js');

describe('lab 3', function () {

    beforeAll(function () {
        util.loadPage();
    });

    it('should set title value like menus element', function () {
        menu.open(data.menuElement);
        menu.open(data.privilegesMenuSubElement);
        expect(title.getTitle()).toEqual(data.privilegesMenuSubElement);
    });

    it('should set name by selected element', function () {
        privilegeTable.secondListItem.click();
        expect(seasonData.name.getAttribute('value')).toEqual(data.itemNameSecond);
    });

    it('should add new element', function () {
        seasonData.plusButton.click();
        privilegePopup.popupNameField.sendKeys('Test_create');
        popup.okButton.click();
        util.clickAfterDrawing(privilegeTable.firstListItem);
        expect(privilegeData.name.getAttribute('value')).toEqual(data.testCreateItemName);
    });

    it('should edit element', function () {
        privilegeTable.firstListItem.click();
        privilegeData.name.clear();
        privilegeData.name.sendKeys('Test_edit');
        seasonData.saveButton.click();
        privilegeTable.firstListItem.click();
        expect(privilegeData.name.getAttribute('value')).toEqual(data.testEditItemName);
    });

    it('should remove element', function () {
        privilegeTable.firstListItem.click();
        seasonData.minusButton.click();
        popup.yesButton.click();
        util.clickAfterDrawing(privilegeTable.firstListItem);
        expect(privilegeData.name.getAttribute('value')).toEqual(data.itemNameFirst);
    });
});