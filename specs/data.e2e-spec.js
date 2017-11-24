var util = require('../util/common.js');
var data = require('../data/data.e2e-data.json');

var pageTitle = require('../po/common/page/pageTitle.js');
var editItems = require('../po/common/table/editItems.js');
var addingPopup = require('../po/common/popup/addingPopup.js');
var deletingPopup = require('../po/common/popup/deletingPopup.js');
var seasonData = require('../po/specific/season/seasonData.js');
var privilegeTable = require('../po/specific/privilege/privilegeTable.js');
var privilegeAddingPopup = require('../po/specific/privilege/privilegeAddingPopup.js');
var privilegeData = require('../po/specific/privilege/privilegeData.js');

var MainMenu = require('../po/common/page/mainMenu.js');
var SeasonTable = require('../po/specific/season/seasonTable.js');

var mainMenu = new MainMenu(data);
var seasonTable = new SeasonTable(data);

describe('lab 2-3 - stammdaten page', function () {

    beforeAll(function () {
        browser.get(browser.params.baseUrl);
    });
    
    it('lab 2, step 1 - should set title value like menus element', function () {
        mainMenu.menuElement.click();
        mainMenu.seasonsMenuSubElement.click();
        expect(pageTitle.title.getText()).toEqual(data.seasonsMenuSubElement);
    });

    it('lab 2, step 2 - should set season and specific data in fields', function () {
        seasonTable.season.click();
        expect(seasonData.identity.getAttribute('value')).toEqual(data.identity);
        expect(seasonData.name.getAttribute('value')).toEqual(data.name);
        expect(seasonData.startDate.getAttribute('value')).toEqual(data.startDate);
        expect(seasonData.endDate.getAttribute('value')).toEqual(data.endDate);
    });
    
    it('lab 3, step 1 - should set title value like menus element', function () {
        mainMenu.privilegesMenuSubElement.click();
        expect(pageTitle.title.getText()).toEqual(data.privilegesMenuSubElement);
    });

    it('lab 3, step 2 - should set name by selected element', function () {
        privilegeTable.secondListItem.click();
        expect(seasonData.name.getAttribute('value')).toEqual(data.itemNameSecond);
    });
    
    it('lab 3, step 3 - should add new element', function () {
        editItems.plusButton.click();
        privilegeAddingPopup.popupNameField.sendKeys('Test_create');
        addingPopup.okButton.click();
        util.waitVisibilityAndClick(privilegeTable.firstListItem);
        expect(privilegeData.name.getAttribute('value')).toEqual(data.testCreateItemName);
    });
    
    it('lab 3, step 4 - should edit element', function () {
        privilegeTable.firstListItem.click();
        privilegeData.name.clear();
        privilegeData.name.sendKeys('Test_edit');
        editItems.saveButton.click();
        privilegeTable.firstListItem.click();
        expect(privilegeData.name.getAttribute('value')).toEqual(data.testEditItemName);
    });
    
    it('lab 3, step 5 - should remove element', function () {
        privilegeTable.firstListItem.click();
        editItems.minusButton.click();
        deletingPopup.yesButton.click();
        util.waitVisibilityAndClick(privilegeTable.firstListItem);
        expect(privilegeData.name.getAttribute('value')).toEqual(data.itemNameFirst);
    });
});
















