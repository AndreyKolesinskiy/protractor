var ArtikelzuordnungPage = require('../pages/artikelzuordnung.e2e-po.js');
var CommonUtil = require('../util/common.js');

describe('stammdaten page, lab 6', function () {
    var page = new ArtikelzuordnungPage();
    var util = new CommonUtil();
    
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
        util.openBranch(page.nod, page.sub1);

        page.visibilityWaitingAndDoubleClick(page.sub2);
        page.menuElement.click();
        page.visibilityWaitingAndClick(page.menuSubElement);

        expect(page.title.getText()).toEqual('Artikelzuordnung');
    });

    /**
     * Check add, check and undo entered value.
     * */
    it('should add, check and undo entered value', function () {
        page.menuElement.click();
        page.visibilityWaitingAndClick(page.menuSubElement);
        page.visibilityWaitingAndClick(page.plusButton);
        page.changeElementMenu(page.publicationPart, 'DOWN');
        page.changeElementMenu(page.page, 'DOWN');
        page.visibilityWaitingAndClick(page.okButton);

        expect(page.addedElement.isPresent()).toBe(true);

        browser.actions()
            .sendKeys(protractor.Key.ENTER)
            .sendKeys(protractor.Key.ARROW_DOWN)
            .sendKeys(protractor.Key.ENTER)
            .perform();

        expect(page.eshopNumber.getAttribute('value')).toEqual('11250114');

        page.undoButton.click();
        expect(page.eshopNumber.getAttribute('value')).toEqual('');
        
        util.closeBranch(page.nod, page.sub1);        
    });
});