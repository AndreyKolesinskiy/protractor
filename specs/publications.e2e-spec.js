var PublicationsPage = require('../pages/publications.e2e-po.js');
var CommonUtil = require('../util/common.js');

describe('publications page, lab 4', function () {
    var page = new PublicationsPage();
    var util = new CommonUtil();

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
     * Check addition element.
     */
    it('should add element', function () {
        page.plusButton.click();

        page.season.sendKeys(31);
        var randomValue = Math.round(Math.random() * 8999 + 1000);
        page.newNumber.sendKeys(randomValue);
        page.changeElementMenu(page.type, 'DOWN');
        page.clearAndEnterValue(page.hauptDate, '05.05.2017');
        page.clearAndEnterValue(page.warenDate, '05.05.2017');
        page.changeElementMenu(page.priceType, 'DOWN');
        /* needed country value is default */
        page.description.sendKeys('test');

        page.visibilityWaitingAndClick(page.okButton);
        expect(page.sub2.isPresent()).toBe(true);
    });

    /**
     * Check remove element.
     */
    it('should remove element', function () {
        page.visibilityWaitingAndClick(page.trashButton);
        page.visibilityWaitingAndClick(page.yesButton);

        expect(page.sub2.isPresent()).toBe(false);
    });

    afterAll(function () {
        util.closeBranch(page.nod, page.sub1);
    });
});