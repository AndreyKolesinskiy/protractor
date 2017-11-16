var AssignmentPage = require('../pages/assignment.e2e-po.js');
var CommonUtil = require('../util/common.js');

describe('lab 6 - artikelzuordnung page', function () {
    var page = new AssignmentPage();
    var util = new CommonUtil();

    beforeAll(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });

    it('lab 6, step 1 - should set title value by menu element', function () {
        page.productionsMenuElement.click();
        expect(page.title.getText()).toEqual('Publikationspflege');
    });

    it('lab 6, step 2 - should set title value like menus element', function () {
        util.selectBranchInnerNode(['39, Frühling/Sommer 2015', 'Inszenierungspunkt', '3911 Schwarzpreis ET: 04.03.2016']);
        page.menuElement.click();
        page.menuSubElement.click();
        expect(page.title.getText()).toEqual('Artikelzuordnung');
    });

    it('lab 6, step 3 - 6 - should add, check and undo entered value', function () {
        page.plusButton.click();
        util.setDropdownMenuValue(page.publicationPart, 'DOWN');
        util.setDropdownMenuValue(page.page, 'DOWN');
        page.okButton.click();
        expect(page.addedElement.isPresent()).toBe(true);

        util.focusAndSetDropdownMenuValue();
        expect(page.eshopNumber.getAttribute('value')).toEqual('11250114');

        page.undoButton.click();
        expect(page.eshopNumber.getAttribute('value')).toEqual('');
    });

    afterAll(function () {
        util.closeBranch(['39, Frühling/Sommer 2015', 'Inszenierungspunkt']);
    });
});