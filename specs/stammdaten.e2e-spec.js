var StammdatenPage = require('../pages/stammdaten.e2e-po.js');

describe('stammdaten page', function () {
    var page = new StammdatenPage();

    /**
     * Get cell page.
     */
    beforeEach(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });

    /**
     * Page's title must be like menu's selected element - Saisons.
     */
    it('should set title value like menus element - Saisons', function () {
        page.menuElement.click();
        page.visibilityWaitingAndClick(page.saisonsMenuSubElement);
        expect(page.title.getText()).toEqual('Saisons');
    });

    /**
     * Page's title must be like menu's selected element - Vorteile.
     */
    it('should set title value like menus element - Vorteile', function () {
        page.menuElement.click();
        page.visibilityWaitingAndClick(page.vorteileMenuSubElement);
        expect(page.title.getText()).toEqual('Vorteile');
    });
});
















