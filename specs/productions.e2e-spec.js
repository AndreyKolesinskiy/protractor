var ProductionsPage = require('../pages/productions.e2e-po.js');
var CommonUtil = require('../util/common.js');

describe('productions page, lab 1', function () {
    var page = new ProductionsPage();
    var util = new CommonUtil();
    
    beforeEach(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });

    /* 1 */
    it('should set title value like menus element', function () {
        page.productionsMenuElement.click();        
        expect(page.title.getText()).toEqual('Publikationspflege');
    });

    /* 2 */
    it('should set true values on fields after click on trees element', function () {        
        util.openBranch(page.nod, page.sub1);

        util.visibilityWaitingAndDoubleClick(page.sub2);

        expect(page.number.getAttribute('value')).toEqual('6556');
        expect(page.type.getAttribute('value')).toEqual('1');
        expect(page.date.getAttribute('value')).toEqual('02.03.2017');
        expect(page.price.getAttribute('value')).toEqual('0');
        
        util.closeBranch(page.nod, page.sub1);
    });

    /* 3, 4 */
    it('should set fields values after click on trees element', function () {        
        util.openBranch(page.nod, page.sub1);

        util.visibilityWaitingAndDoubleClick(page.sub2);

        util.clearAndEnterValue(page.number, '121');
        util.changeElementMenu(page.type, 'UP');
        util.clearAndEnterValue(page.date, '01.02.2007');
        util.changeElementMenu(page.price, 'DOWN');

        // 3
        expect(page.number.getAttribute('value')).toEqual('121');
        expect(page.type.getAttribute('value')).toEqual('21');
        expect(page.date.getAttribute('value')).toEqual('01.02.2007');
        expect(page.price.getAttribute('value')).toEqual('1');

        // 4
        page.cancelButton.click();
        expect(page.cancelMessage.isPresent()).toBe(true);
        
        util.closeBranch(page.nod, page.sub1);        
    });
});
















