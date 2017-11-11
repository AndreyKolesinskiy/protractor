var ProductionsPage = require('../pages/productions.e2e-po.js');

describe('productions page', function () {
    var page = new ProductionsPage();
    var EC = protractor.ExpectedConditions;

    /**
     * Get cell page.
     */
    beforeEach(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });

    /**
     * Page's title must be like menu's selected element.
     */
    /*it('should set title value like menus element', function () {
        page.productionsMenuElement.click();
        expect(page.title.getText()).toEqual('Publikationspflege');
    });*/

    /**
     * Working shit. Set true fields after click on tree's element.
     * */
    it('should set true fields after click on trees element', function () {

        var nod = element(by.id('content'))
            .all(by.css('.aciTreePush')).get(18);
        var sub1 = element(by.id('content'))
            .all(by.css('.aciTreePush')).get(21);
        var sub2 = element(by.id('content'))
            .all(by.css('.aciTreeText')).get(22);

        nod.click();
        browser.wait(EC.visibilityOf(sub1), 5000);
        sub1.click();
        browser.wait(EC.visibilityOf(sub2), 5000);
        sub2.click();

        expect(page.number.getAttribute('value')).toEqual('6556');
        expect(page.type.getAttribute('value')).toEqual('1');
        expect(page.date.getAttribute('value')).toEqual('02.03.2017');
        expect(page.price.getAttribute('value')).toEqual('0');
    });

});