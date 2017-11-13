var SeitenplanungPage = require('../pages/seitenplanung.e2e-po.js');

describe('stammdaten page', function () {
    var page = new SeitenplanungPage();

    /**
     * Get cell page.
     */
    beforeEach(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });

    /**
     * Page's title must be like menu's selected element - Publikationspflege.
     */
    it('should set title value like menus element - Publikationspflege', function () {
        page.productionsMenuElement.click();
        expect(page.title.getText()).toEqual('Publikationspflege');
    });

    /**
     * Page's title must be like menu's selected element - Seitenplanung.
     * */
    it('should set title value like menus element - Seitenplanung', function () {
        page.visibilityWaitingAndDoubleClick(page.nod);
        page.visibilityWaitingAndDoubleClick(page.sub1);
        page.visibilityWaitingAndDoubleClick(page.sub2);

        page.menuElement.click();
        page.visibilityWaitingAndClick(page.menuSubElement);

        expect(page.title.getText()).toEqual('Seitenplanung');
    });

    /**
     * Check saving file.
     * */
    it('should save file', function () {
        page.menuElement.click();
        page.visibilityWaitingAndClick(page.menuSubElement);

        /* need expect this */
        page.visibilityWaitingAndClick(page.saveButton);
        browser.sleep(5000);
    });    
});