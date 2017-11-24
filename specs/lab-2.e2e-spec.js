var data = require('../data/lab-2.e2e-data.json');

var pageTitle = require('../po/common/page/pageTitle.js');
var seasonData = require('../po/specific/season/seasonData.js');

var MainMenu = require('../po/common/page/mainMenu.js');
var SeasonTable = require('../po/specific/season/seasonTable.js');

var mainMenu = new MainMenu(data);
var seasonTable = new SeasonTable(data);

describe('lab 2 - stammdaten page', function () {

    beforeAll(function () {
        browser.get(browser.params.baseUrl);
    });
    
    it('lab 2, step 1 - should set title value like menus element', function () {
        mainMenu.menuElement.click();
        mainMenu.seasonsMenuSubElement.click();
        expect(pageTitle.title.getText()).toEqual(data.seasonsMenuSubElement);
    });

    it('lab 2, step 2 - should set season and specific data in fields', function () {
        seasonTable.season.click();
        expect(seasonData.identity.getAttribute('value')).toEqual(data.identity);
        expect(seasonData.name.getAttribute('value')).toEqual(data.name);
        expect(seasonData.startDate.getAttribute('value')).toEqual(data.startDate);
        expect(seasonData.endDate.getAttribute('value')).toEqual(data.endDate);
    });
});
















