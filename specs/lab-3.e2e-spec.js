var util = require('../util/common.js');
var data = require('../data/lab-3.e2e-data.json');

var pageTitle = require('../po/common/title.js');
var popup = require('../po/common/popups.js');
var seasonData = require('../po/specific/season/seasonData.js');
var privilegeTable = require('../po/specific/privilege/privilegeTable.js');
var privilegeAddingPopup = require('../po/specific/privilege/privilegeAddingPopup.js');
var privilegeData = require('../po/specific/privilege/privilegeData.js');
var mainMenu = require('../po/common/menu.js');

var ButtonPanels = require('../po/common/buttons.js');
var buttonPanels = new ButtonPanels(data);

describe('lab 3', function () {

    beforeAll(function () {
        browser.get(browser.params.baseUrl);
    });

    it('should set title value like menus element', function () {
        mainMenu.open(data.menuElement);
        mainMenu.open(data.privilegesMenuSubElement);
        expect(pageTitle.title.getText()).toEqual(data.privilegesMenuSubElement);
    });

    it('should set name by selected element', function () {
        privilegeTable.secondListItem.click();
        expect(seasonData.name.getAttribute('value')).toEqual(data.itemNameSecond);
    });

    it('should add new element', function () {
        buttonPanels.plusButton.click();
        privilegeAddingPopup.popupNameField.sendKeys('Test_create');
        popup.okButton.click();
        util.waitVisibilityAndClick(privilegeTable.firstListItem);
        expect(privilegeData.name.getAttribute('value')).toEqual(data.testCreateItemName);
    });

    it('should edit element', function () {
        privilegeTable.firstListItem.click();
        privilegeData.name.clear();
        privilegeData.name.sendKeys('Test_edit');
        buttonPanels.saveButton.click();
        privilegeTable.firstListItem.click();
        expect(privilegeData.name.getAttribute('value')).toEqual(data.testEditItemName);
    });

    it('should remove element', function () {
        privilegeTable.firstListItem.click();
        buttonPanels.minusButton.click();
        popup.yesButton.click();
        util.waitVisibilityAndClick(privilegeTable.firstListItem);
        expect(privilegeData.name.getAttribute('value')).toEqual(data.itemNameFirst);
    });
});
















