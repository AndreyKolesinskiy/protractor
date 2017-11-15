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
        util.selectBranchInnerNode(['40, Herbst/Winter 2015/2016', 'Prospekt', '6556 Schwarzpreis ET: 02.03.2017']);
        expect(page.number.getAttribute('value')).toEqual('6556');
        expect(page.type.getAttribute('value')).toEqual('1');
        expect(page.date.getAttribute('value')).toEqual('02.03.2017');
        expect(page.price.getAttribute('value')).toEqual('0');
        
        util.closeBranch(['40, Herbst/Winter 2015/2016', 'Prospekt']);
    });
    
    it('lab 1, step 3 - 4 - should set fields new values after click on trees element, rollback', function () {
        util.selectBranchInnerNode(['40, Herbst/Winter 2015/2016', 'Prospekt', '6556 Schwarzpreis ET: 02.03.2017']);
        util.setValue(page.number, '121');
        util.setDropdownMenuValue(page.type, 'UP');
        util.setValue(page.date, '01.02.2007');
        util.setDropdownMenuValue(page.price, 'DOWN');
        expect(page.number.getAttribute('value')).toEqual('121');
        expect(page.type.getAttribute('value')).toEqual('21');
        expect(page.date.getAttribute('value')).toEqual('01.02.2007');
        expect(page.price.getAttribute('value')).toEqual('1');
        
        page.cancelButton.click();
        expect(page.cancelMessage.isPresent()).toBe(true);

        util.closeBranch(['40, Herbst/Winter 2015/2016', 'Prospekt']);
    });
});
















