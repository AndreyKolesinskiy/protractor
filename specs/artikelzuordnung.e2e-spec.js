var ArtikelzuordnungPage = require('../pages/artikelzuordnung.e2e-po.js');

describe('stammdaten page', function () {
    var page = new ArtikelzuordnungPage();

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
     * Page's title must be like menu's selected element - Artikelzuordnung.
     * */
    it('should set title value like menus element - Artikelzuordnung', function () {
        page.visibilityWaitingAndDoubleClick(page.nod);
        page.visibilityWaitingAndDoubleClick(page.sub1);
        page.visibilityWaitingAndDoubleClick(page.sub2);

        page.menuElement.click();
        page.visibilityWaitingAndClick(page.menuSubElement);

        expect(page.title.getText()).toEqual('Artikelzuordnung');
    });
});