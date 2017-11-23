var page = require('../pages/data.e2e-po.js');
var util = require('../util/common.js');
var data = require('../data/data.e2e-data.json');

describe('lab 2-3 - stammdaten page', function () {

    beforeAll(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });
    
    it('lab 2, step 1 - should set title value like menus element', function () {
        page.menuElement.click();
        page.seasonsMenuSubElement.click();
        expect(page.title.getText()).toEqual(data.seasonsMenuSubElement);
    });

    it('lab 2, step 2 - should set season and specific data in fields', function () {
        page.season.click();
        expect(page.identity.getAttribute('value')).toEqual(data.identity);
        expect(page.name.getAttribute('value')).toEqual(data.name);
        expect(page.startDate.getAttribute('value')).toEqual(data.startDate);
        expect(page.endDate.getAttribute('value')).toEqual(data.endDate);
    });
    
    it('lab 3, step 1 - should set title value like menus element', function () {
        page.privilegesMenuSubElement.click();
        expect(page.title.getText()).toEqual(data.privilegesMenuSubElement);
    });

    it('lab 3, step 2 - should set name by selected element', function () {
        page.secondListItem.click();
        expect(page.name.getAttribute('value')).toEqual(data.itemNameSecond);
    });
    
    it('lab 3, step 3 - should add new element', function () {
        page.plusButton.click();
        page.popupNameField.sendKeys('Test_create');
        page.okButton.click();
        util.waitVisibilityAndClick(page.firstListItem);
        expect(page.name.getAttribute('value')).toEqual(data.testCreateItemName);
    });
    
    it('lab 3, step 4 - should edit element', function () {
        page.firstListItem.click();
        page.name.clear();
        page.name.sendKeys('Test_edit');
        page.saveButton.click();
        page.firstListItem.click();
        expect(page.name.getAttribute('value')).toEqual(data.testEditItemName);
    });
    
    it('lab 3, step 5 - should remove element', function () {
        page.firstListItem.click();
        page.minusButton.click();
        page.yesButton.click();
        util.waitVisibilityAndClick(page.firstListItem);
        expect(page.name.getAttribute('value')).toEqual(data.itemNameFirst);
    });
});
















