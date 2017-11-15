var ProductionsPage = require('../pages/productions.e2e-po.js');
var CommonUtil = require('../util/common.js');

describe('lab 1 - productions page', function () {
    var page = new ProductionsPage();
    var util = new CommonUtil();
    
    beforeEach(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });
    
    it('lab 1, step 1 - should set title value by menu element', function () {
        page.productionsMenuElement.click();        
        expect(page.title.getText()).toEqual('Publikationspflege');
    });
    
    it('lab 1, step 2 - should set fields values after click on branch element', function () {
        util.openBranch(page.nod, page.sub1);
        util.visibilityWaitingAndDoubleClick(page.sub2);

        expect(page.number.getAttribute('value')).toEqual('6556');
        expect(page.type.getAttribute('value')).toEqual('1');
        expect(page.date.getAttribute('value')).toEqual('02.03.2017');
        expect(page.price.getAttribute('value')).toEqual('0');
        
        util.closeBranch(page.nod, page.sub1);
    });
    
    it('lab 1, step 3 - 4 - should set fields new values after click on trees element, rollback', function () {
        util.openBranch(page.nod, page.sub1);
        util.visibilityWaitingAndDoubleClick(page.sub2);
        util.clearAndEnterValue(page.number, '121');
        util.changeElementMenu(page.type, 'UP');
        util.clearAndEnterValue(page.date, '01.02.2007');
        util.changeElementMenu(page.price, 'DOWN');
        
        expect(page.number.getAttribute('value')).toEqual('121');
        expect(page.type.getAttribute('value')).toEqual('21');
        expect(page.date.getAttribute('value')).toEqual('01.02.2007');
        expect(page.price.getAttribute('value')).toEqual('1');
        
        page.cancelButton.click();
        expect(page.cancelMessage.isPresent()).toBe(true);
        
        util.closeBranch(page.nod, page.sub1);        
    });
});
















