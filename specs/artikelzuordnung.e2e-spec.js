var ArtikelzuordnungPage = require('../pages/artikelzuordnung.e2e-po.js');
var CommonUtil = require('../util/common.js');

describe('stammdaten page, lab 6', function () {
    var page = new ArtikelzuordnungPage();
    var util = new CommonUtil();

    beforeEach(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });

    it('should set title value like menus element - Publikationspflege', function () {
        page.productionsMenuElement.click();
        expect(page.title.getText()).toEqual('Publikationspflege');
    });

    it('should set title value like menus element - Artikelzuordnung', function () {
        util.openBranch(page.nod, page.sub1);

        util.visibilityWaitingAndDoubleClick(page.sub2);
        page.menuElement.click();
        util.visibilityWaitingAndClick(page.menuSubElement);

        expect(page.title.getText()).toEqual('Artikelzuordnung');
    });

    it('should add, check and undo entered value', function () {
        page.menuElement.click();
        util.visibilityWaitingAndClick(page.menuSubElement);
        util.visibilityWaitingAndClick(page.plusButton);
        util.changeElementMenu(page.publicationPart, 'DOWN');
        util.changeElementMenu(page.page, 'DOWN');
        util.visibilityWaitingAndClick(page.okButton);

        expect(page.addedElement.isPresent()).toBe(true);

        util.focusAndSelectMenuElement();

        expect(page.eshopNumber.getAttribute('value')).toEqual('11250114');

        page.undoButton.click();
        expect(page.eshopNumber.getAttribute('value')).toEqual('');
        
        util.closeBranch(page.nod, page.sub1);        
    });
});