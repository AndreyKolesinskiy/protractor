var page = require('../pages/productions.e2e-po.js');
var util = require('../util/common.js');
var data = require('../data/productions.e2e-data.json');

describe('lab 1 - productions page', function () {

    beforeAll(function () {
        browser.get(browser.params.baseUrl);
    });
    
    it('lab 1, step 1 - should set title value by menu element', function () {
        page.productionsMenuElement.click();        
        expect(page.title.getText()).toEqual(data.productionsMenuElement);
    });
    
    it('lab 1, step 2 - should set fields values after click on branch element', function () {
        util.selectBranchInnerNode(data.nodes);
        expect(page.number.getAttribute('value')).toEqual(data.number);
        expect(page.type.getAttribute('value')).toEqual(data.type);
        expect(page.date.getAttribute('value')).toEqual(data.date);
        expect(page.price.getAttribute('value')).toEqual(data.price);
    });
    
    it('lab 1, step 3 - 4 - should set fields new values after click on trees element, rollback', function () {        
        util.setValue(page.number, data.testNumber);
        util.setDropdownMenuValue(page.type, 'UP');
        util.setValue(page.date, data.testDate);
        util.setDropdownMenuValue(page.price, 'DOWN');
        expect(page.number.getAttribute('value')).toEqual(data.testNumber);
        expect(page.type.getAttribute('value')).toEqual(data.testType);
        expect(page.date.getAttribute('value')).toEqual(data.testDate);
        expect(page.price.getAttribute('value')).toEqual(data.testPrice);
        
        page.cancelButton.click();
        expect(page.cancelMessage.isPresent()).toBe(true);
    });

    afterAll(function () {
        util.closeBranch([data.nodes[0], data.nodes[1]]);
    });
});
















