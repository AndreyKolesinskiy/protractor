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
     * Page's title must be like menu's selected element.
     */
    it('should set title value like menus element', function () {
        page.menuElement.click();
        page.visibilityWaitingAndClick(page.menuSubElement);
        expect(page.title.getText()).toEqual('Saisons');
    });
});
















