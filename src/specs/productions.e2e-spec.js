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
     * Working shit. Set true fields after click on tree's element.
     * */
    it('should set true fields after click on trees element', function () {
        element(by.id('content'))
            .all(by.css('.aciTreePush')).get(18).click();
        element(by.id('content'))
            .all(by.css('.aciTreePush')).get(21).click();
        element(by.id('content'))
            .all(by.css('.aciTreeText')).get(22).click();

        expect(page.number.getAttribute('value')).toBe('6556');
        expect(page.type.getAttribute('value')).toBe('1');
        expect(page.date.getAttribute('value')).toBe('02.03.2017');
        expect(page.price.getAttribute('value')).toBe('0');
    });

});