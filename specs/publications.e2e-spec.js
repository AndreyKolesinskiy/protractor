var PublicationsPage = require('../pages/publications.e2e-po.js');
var CommonUtil = require('../util/common.js');

describe('lab 4 - publications page', function () {
    var page = new PublicationsPage();
    var util = new CommonUtil();
    
    beforeAll(function () {
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
        util.setDropdownMenuValue(page.type, 'DOWN');
        util.setValue(page.mainDate, '05.05.2017');
        util.setValue(page.tradeDate, '05.05.2017');
        util.setDropdownMenuValue(page.priceType, 'DOWN');
        page.description.sendKeys('test');
        page.okButton.click();
        expect(util.getNodeByValue('Schwarzpreis ET: 05.05.2017').isPresent()).toBe(true);
    });
    
    it('lab 4, step 3 - should remove element', function () {
        page.trashButton.click();
        page.yesButton.click();
        expect(util.getNodeByValue('Schwarzpreis ET: 05.05.2017').isPresent()).toBe(false);
    });

    afterAll(function () {
        util.closeBranch(['31, Frühling/Sommer 2011', 'Inszenierungspunkt']);
    });
});