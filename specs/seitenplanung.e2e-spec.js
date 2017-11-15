var SeitenplanungPage = require('../pages/seitenplanung.e2e-po.js');
var CommonUtil = require('../util/common.js');

describe('lab 5 - seitenplanung page', function () {
    var page = new SeitenplanungPage();
    var util = new CommonUtil();
        
    beforeEach(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });

    it('lab 5, step 1 - should set title value by menu element', function () {
        page.productionsMenuElement.click();
        expect(page.title.getText()).toEqual('Publikationspflege');
    });

    it('lab 5, step 2 - 3 - should set title value like menus element', function () {
        util.selectBranchInnerNode(['39, Frühling/Sommer 2015', 'Inszenierungspunkt', '3911 Schwarzpreis ET: 04.03.2016']);

        page.menuElement.click();
        util.visibilityWaitingAndClick(page.menuSubElement);

        expect(page.title.getText()).toEqual('Seitenplanung');
    });

    it('lab 5, step 4 - should save file', function () {
        page.menuElement.click();
        util.visibilityWaitingAndClick(page.menuSubElement);

        /* TODO: move out expect from function */
        util.saveFile(page.saveButton);
        util.closeBranch(['39, Frühling/Sommer 2015', 'Inszenierungspunkt']);
    });    
});