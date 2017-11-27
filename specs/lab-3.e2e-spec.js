var util = require('../util/common.js');
var data = require('../data/lab-3.e2e-data.json');

var pageTitle = require('../po/common/page/pageTitle.js');
var editItems = require('../po/common/table/editItems.js');
var addingPopup = require('../po/common/popup/addingPopup.js');
var deletingPopup = require('../po/common/popup/deletingPopup.js');
var seasonData = require('../po/specific/season/seasonData.js');
var privilegeTable = require('../po/specific/privilege/privilegeTable.js');
var privilegeAddingPopup = require('../po/specific/privilege/privilegeAddingPopup.js');
var privilegeData = require('../po/specific/privilege/privilegeData.js');

var MainMenu = require('../po/common/page/mainMenu.js');

var mainMenu = new MainMenu(data);

describe('lab 3', function () {

    beforeAll(function () {
        browser.get(browser.params.baseUrl);
    });

    it('should set title value like menus element', function () {
        mainMenu.menuElement.click();
        mainMenu.privilegesMenuSubElement.click();
        expect(pageTitle.title.getText()).toEqual(data.privilegesMenuSubElement);
    });

    it('should set name by selected element', function () {
        privilegeTable.secondListItem.click();
        expect(seasonData.name.getAttribute('value')).toEqual(data.itemNameSecond);
    });

    it('should add new element', function () {
        editItems.plusButton.click();
        privilegeAddingPopup.popupNameField.sendKeys('Test_create');
        addingPopup.okButton.click();
        util.waitVisibilityAndClick(privilegeTable.firstListItem);
        expect(privilegeData.name.getAttribute('value')).toEqual(data.testCreateItemName);
    });

    it('should edit element', function () {
        privilegeTable.firstListItem.click();
        privilegeData.name.clear();
        privilegeData.name.sendKeys('Test_edit');
        editItems.saveButton.click();
        privilegeTable.firstListItem.click();
        expect(privilegeData.name.getAttribute('value')).toEqual(data.testEditItemName);
    });

    it('should remove element', function () {
        privilegeTable.firstListItem.click();
        editItems.minusButton.click();
        deletingPopup.yesButton.click();
        util.waitVisibilityAndClick(privilegeTable.firstListItem);
        expect(privilegeData.name.getAttribute('value')).toEqual(data.itemNameFirst);
    });
});
















