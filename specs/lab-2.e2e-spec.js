var data = require('../data/lab-2.e2e-data.json');

var pageTitle = require('../po/common/title.js');
var seasonData = require('../po/specific/season/seasonData.js');
var mainMenu = require('../po/common/menu.js');

var SeasonTable = require('../po/specific/season/seasonTable.js');
var seasonTable = new SeasonTable(data);

describe('lab 2', function () {

    beforeAll(function () {
        browser.get(browser.params.baseUrl);
    });
    
    it('should set title value like menus element', function () {
        mainMenu.open(data.menuElement);
        mainMenu.open(data.seasonsMenuSubElement);
        expect(pageTitle.title.getText()).toEqual(data.seasonsMenuSubElement);
    });

    it('should set season and specific data in fields', function () {
        seasonTable.season.click();
        expect(seasonData.identity.getAttribute('value')).toEqual(data.identity);
        expect(seasonData.name.getAttribute('value')).toEqual(data.name);
        expect(seasonData.startDate.getAttribute('value')).toEqual(data.startDate);
        expect(seasonData.endDate.getAttribute('value')).toEqual(data.endDate);
    });
});
















