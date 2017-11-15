var PublicationsPage = require('../pages/publications.e2e-po.js');
var CommonUtil = require('../util/common.js');

describe('lab 4 - publications page', function () {
    var page = new PublicationsPage();
    var util = new CommonUtil();
    
    beforeEach(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });
    
    it('lab 4, step 1 - should set title value by menu element', function () {
        page.productionsMenuElement.click();
        expect(page.title.getText()).toEqual('Publikationspflege');
    });
    
    it('lab 4, step 2 - should add element', function () {
        page.plusButton.click();
        page.season.sendKeys(31);        
        page.newNumber.sendKeys(util.getRandomValue());
        util.changeElementMenu(page.type, 'DOWN');
        util.clearAndEnterValue(page.hauptDate, '05.05.2017');
        util.clearAndEnterValue(page.warenDate, '05.05.2017');
        util.changeElementMenu(page.priceType, 'DOWN');
        page.description.sendKeys('test');
        util.visibilityWaitingAndClick(page.okButton);
        
        expect(page.sub2.isPresent()).toBe(true);
    });
    
    it('lab 4, step 3 - should remove element', function () {
        util.visibilityWaitingAndClick(page.trashButton);
        util.visibilityWaitingAndClick(page.yesButton);

        expect(page.sub2.isPresent()).toBe(false);
    });

    afterAll(function () {
        util.closeBranch(page.nod, page.sub1);
    });
});