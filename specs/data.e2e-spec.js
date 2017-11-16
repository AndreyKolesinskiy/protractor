var DataPage = require('../pages/data.e2e-po.js');
var CommonUtil = require('../util/common.js');

describe('lab 2-3 - stammdaten page', function () {
    var page = new DataPage();
    var util = new CommonUtil();
    
    beforeAll(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });
    
    it('lab 2, step 1 - should set title value like menus element', function () {
        page.menuElement.click();
        util.waitVisibilityAndClick(page.seasonsMenuSubElement);
        expect(page.title.getText()).toEqual('Saisons');
    });

    it('lab 2, step 2 - should set season and specific data in fields', function () {
        page.season.click();
        expect(page.identity.getAttribute('value')).toEqual('34');
        expect(page.name.getAttribute('value')).toEqual('Herbst/Winter 2012/2013');
        expect(page.startDate.getAttribute('value')).toEqual('01.09.2012');
        expect(page.endDate.getAttribute('value')).toEqual('28.02.2013');
    });
    
    it('lab 3, step 1 - should set title value like menus element', function () {
        util.waitVisibilityAndClick(page.privilegesMenuSubElement);
        expect(page.title.getText()).toEqual('Vorteile');
    });

    it('lab 3, step 2 - should set name by selected element', function () {
        page.secondListItem.click();
        expect(page.name.getAttribute('value')).toEqual('VR_2');
    });
    
    it('lab 3, step 3 - should add new element', function () {
        page.plusButton.click();
        page.popupNameField.sendKeys('Test_create');
        page.okButton.click();
        util.waitVisibilityAndClick(page.firstListItem);
        expect(page.name.getAttribute('value')).toEqual('Test_create');
    });
    
    it('lab 3, step 4 - should edit element', function () {
        page.firstListItem.click();
        page.name.clear();
        page.name.sendKeys('Test_edit');
        page.saveButton.click();
        util.waitVisibilityAndClick(page.firstListItem);
        expect(page.name.getAttribute('value')).toEqual('Test_edit');
    });
    
    it('lab 3, step 5 - should remove element', function () {
        util.waitVisibilityAndClick(page.firstListItem);
        page.minusButton.click();
        page.yesButton.click();
        util.waitVisibilityAndClick(page.firstListItem);
        expect(page.name.getAttribute('value')).toEqual('VR_1');
    });
});
















