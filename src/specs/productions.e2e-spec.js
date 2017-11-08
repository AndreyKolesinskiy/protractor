var ProductionsPage = require('../pages/productions.e2e-po.js');

describe('productions page', function() {
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
    it('should set title value like menus element', function() {
        page.productionsMenuElement.click();
        expect(page.title.getText()).toEqual('Publikationspflege');
    });
});