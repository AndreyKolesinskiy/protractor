var StammdatenPage = require('../pages/stammdaten.e2e-po.js');

describe('stammdaten page, lab 2-3', function () {
    var page = new StammdatenPage();

    /**
     * Get cell page.
     */
    beforeEach(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });

    /**
     * Page's title must be like menu's selected element - Saisons.
     */
    it('should set title value like menus element - Saisons', function () {
        page.menuElement.click();
        page.visibilityWaitingAndClick(page.saisonsMenuSubElement);
        expect(page.title.getText()).toEqual('Saisons');
    });

    /**
     * Select season and get specific data in fields.
     */
    it('should set season and specific data in fields', function () {
        page.menuElement.click();
        page.visibilityWaitingAndClick(page.saisonsMenuSubElement);

        page.season.click();

        expect(page.identity.getAttribute('value')).toEqual('34');
        expect(page.name.getAttribute('value')).toEqual('Herbst/Winter 2012/2013');

        expect(page.startDate.getAttribute('value')).toEqual('01.09.2012');
        expect(page.endDate.getAttribute('value')).toEqual('28.02.2013');
    });

    /**
     * Page's title must be like menu's selected element - Vorteile.
     */
    it('should set title value like menus element - Vorteile', function () {
        page.menuElement.click();
        page.visibilityWaitingAndClick(page.vorteileMenuSubElement);
        expect(page.title.getText()).toEqual('Vorteile');
    });

    /**
     * Name field must be like list's selected element.
     */
    it('should set name by selected element', function () {
        page.menuElement.click();
        page.visibilityWaitingAndClick(page.vorteileMenuSubElement);

        page.secondListItem.click();
        expect(page.name.getAttribute('value')).toEqual('VR_2');
    });

    /**
     * Check addition new element.
     */
    it('should add new element', function () {
        page.menuElement.click();
        page.visibilityWaitingAndClick(page.vorteileMenuSubElement);

        page.plusButton.click();
        page.popupNameField.sendKeys('Test_create');
        page.okButton.click();

        /* not pretty solution */
        page.visibilityWaitingAndClick(page.firstListItem);
        expect(page.name.getAttribute('value')).toEqual('Test_create');
    });

    /**
     * Check edition element.
     */
    it('should edit element', function () {
        page.menuElement.click();
        page.visibilityWaitingAndClick(page.vorteileMenuSubElement);

        page.firstListItem.click();
        page.name.clear();
        page.name.sendKeys('Test_edit');
        page.saveButton.click();

        /* not pretty solution */
        page.visibilityWaitingAndClick(page.firstListItem);
        expect(page.name.getAttribute('value')).toEqual('Test_edit');
    });

    /**
     * Remove element.
     */
    it('should remove element', function () {
        page.menuElement.click();
        page.visibilityWaitingAndClick(page.vorteileMenuSubElement);

        page.visibilityWaitingAndClick(page.firstListItem);
        page.minusButton.click();
        page.yesButton.click();

        /* not pretty solution */
        page.visibilityWaitingAndClick(page.firstListItem);
        expect(page.name.getAttribute('value')).toEqual('VR_1');
    });
});
















