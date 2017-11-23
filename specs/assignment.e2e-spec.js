var page = require('../pages/assignment.e2e-po.js');
var util = require('../util/common.js');
var data = require('../data/assignment.e2e-data.json');

describe('lab 6 - artikelzuordnung page', function () {
    var that = this;

    beforeAll(function () {
        browser.get(browser.params.baseUrl);
    });

    it('lab 6, step 1 - should set title value by menu element', function () {
        page.productionsMenuElement.click();
        expect(page.title.getText()).toEqual(data.productionsMenuElement);
    });

    it('lab 6, step 2 - should set title value like menus element', function () {
        util.selectBranchInnerNode(data.nodes);
        page.menuElement.click();
        page.menuSubElement.click();
        expect(page.title.getText()).toEqual(data.title);
    });

    it('lab 6, step 3 - 6 - should add, check and undo entered value', function () {
        page.plusButton.click();
        util.setDropdownMenuValue(page.publicationPart, 'DOWN');
        util.setDropdownMenuValue(page.page, 'DOWN');
        page.okButton.click();
        expect(page.addedElement.isPresent()).toBe(true);

        that.focusAndSetDropdownMenuValue();
        expect(page.eshopNumber.getAttribute('value')).toEqual(data.eshopNumber);

        page.undoButton.click();
        expect(page.eshopNumber.getAttribute('value')).toEqual('');
    });

    /**
     * Фокусировка на текущем элементе и присвоение ему значения из выпадающего списка
     */
    /* TODO: focusAndSetDropdownMenuValue - WAITING OF NEW MONITOR */
    that.focusAndSetDropdownMenuValue = function () {
        browser.actions()
            .sendKeys(protractor.Key.ENTER)
            .sendKeys(protractor.Key.ARROW_DOWN)
            .sendKeys(protractor.Key.ENTER)
            .perform();
    };

    afterAll(function () {
        util.closeBranch([data.nodes[0], data.nodes[1]]);
    });
});