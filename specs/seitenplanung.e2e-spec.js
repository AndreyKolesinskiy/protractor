var SeitenplanungPage = require('../pages/seitenplanung.e2e-po.js');
var CommonUtil = require('../util/common.js');

describe('stammdaten page, lab 5', function () {
    var page = new SeitenplanungPage();
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
     * Page's title must be like menu's selected element - Seitenplanung.
     * */
    it('should set title value like menus element - Seitenplanung', function () {
        util.openBranch(page.nod, page.sub1);

        // page.visibilityWaitingAndDoubleClick(page.nod);
        // page.visibilityWaitingAndDoubleClick(page.sub1);
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

        var path = 'c:/report.xlsx';
        var fs = require('fs');

        if (fs.existsSync(path)) {
            fs.unlinkSync(path);
        }
        page.visibilityWaitingAndClick(page.saveButton);

        browser.driver.wait(function() {

            return fs.existsSync(path);
        }, 30000).then(function () {
            expect(fs.existsSync(path)).toBe(true);
        });
        
        util.closeBranch(page.nod, page.sub1);
    });    
});