var ProductionsPage = require('../pages/productions.e2e-po.js');

describe('productions page', function () {
    var page = new ProductionsPage();

    /**
     * Get cell page.
     */
    beforeEach(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });

    /**
     * Page's title must be like menu's selected element.
     */
    it('should set title value like menus element', function () {
        page.productionsMenuElement.click();        
        expect(page.title.getText()).toEqual('Publikationspflege');
    });

    /**
     * Click tree's element and test fields's values.
     * */
    it('should set true values on fields after click on trees element', function () {
        page.visibilityWaitingAndDoubleClick(page.nod);
        page.visibilityWaitingAndDoubleClick(page.sub1);
        page.visibilityWaitingAndDoubleClick(page.sub2);

        expect(page.number.getAttribute('value')).toEqual('6556');
        expect(page.type.getAttribute('value')).toEqual('1');
        expect(page.date.getAttribute('value')).toEqual('02.03.2017');
        expect(page.price.getAttribute('value')).toEqual('0');

        /* rollback */
        page.visibilityWaitingAndDoubleClick(page.nod);
        page.visibilityWaitingAndDoubleClick(page.sub1);
    });

    /**
     * Set fields's values after click on tree's element.
     * */
    it('should set fields values after click on trees element', function () {
        page.visibilityWaitingAndDoubleClick(page.nod);
        page.visibilityWaitingAndDoubleClick(page.sub1);
        page.visibilityWaitingAndDoubleClick(page.sub2);

        page.clearAndEnterValue(page.number, '121');
        page.changeElementMenu(page.type, 'UP');
        page.clearAndEnterValue(page.date, '01.02.2007');
        page.changeElementMenu(page.price, 'DOWN');

        expect(page.number.getAttribute('value')).toEqual('121');
        expect(page.type.getAttribute('value')).toEqual('21');
        expect(page.date.getAttribute('value')).toEqual('01.02.2007');
        expect(page.price.getAttribute('value')).toEqual('1');
    });

    /**
     * Check cancel message present.
     * */
    it('should get cancel message', function () {
        page.cancelButton.click();
        expect(page.cancelMessage.isPresent()).toBe(true);
    });
});
















