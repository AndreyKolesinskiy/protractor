var util = require('../util/common.js');
var data = require('../data/lab-3.e2e-data.json');

var title = require('../po/common/title.js');
var popup = require('../po/common/popup.js');
var seasonData = require('../po/specific/season/seasonData.js');
var privilegeTable = require('../po/specific/privilege/privilegeTable.js');
var privilegePopup = require('../po/specific/privilege/privilegePopup.js');
var privilegeData = require('../po/specific/privilege/privilegeData.js');
var menu = require('../po/common/menu.js');
var button = require('../po/common/button.js');


describe('lab 3', function () {

    beforeAll(function () {
        util.loadPage();
    });

    it('should set title value like menus element', function () {
        menu.open(data.menuElement);
        menu.open(data.privilegesMenuSubElement);
        expect(title.title.getText()).toEqual(data.privilegesMenuSubElement);
    });

    it('should set name by selected element', function () {
        privilegeTable.secondListItem.click();
        expect(seasonData.name.getAttribute('value')).toEqual(data.itemNameSecond);
    });

    it('should add new element', function () {
        button.plusButton.click();
        privilegePopup.popupNameField.sendKeys('Test_create');
        popup.okButton.click();
        util.waitVisibilityAndClick(privilegeTable.firstListItem);
        expect(privilegeData.name.getAttribute('value')).toEqual(data.testCreateItemName);
    });

    it('should edit element', function () {
        privilegeTable.firstListItem.click();
        privilegeData.name.clear();
        privilegeData.name.sendKeys('Test_edit');
        button.saveButton.click();
        privilegeTable.firstListItem.click();
        expect(privilegeData.name.getAttribute('value')).toEqual(data.testEditItemName);
    });

    it('should remove element', function () {
        privilegeTable.firstListItem.click();
        button.minusButton.click();
        popup.yesButton.click();
        util.waitVisibilityAndClick(privilegeTable.firstListItem);
        expect(privilegeData.name.getAttribute('value')).toEqual(data.itemNameFirst);
    });
});
















