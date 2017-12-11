"use strict";

var util = require('../util/common.js'),
data = require('../data/lab-2.e2e-data.json'),

title = require('../po/common/title.js'),
seasonData = require('../po/specific/season/seasonData.js'),
mainMenu = require('../po/common/mainMenu.js'),

SeasonTable = require('../po/specific/season/seasonTable.js'),
seasonTable = new SeasonTable(data);

describe('lab 2', function () {

    beforeAll(function () {
        util.loadPage();
    });
    
    it('should set title value like menus element', function () {
        mainMenu.open(data.menuElement);
        mainMenu.open(data.seasonsMenuSubElement);
        expect(title.getTitle()).toEqual(data.seasonsMenuSubElement);
    });

    it('should set season and specific data in fields', function () {
        seasonTable.season.click();
        expect(seasonData.identity.getAttribute('value')).toEqual(data.identity);
        expect(seasonData.name.getAttribute('value')).toEqual(data.name);
        expect(seasonData.startDate.getAttribute('value')).toEqual(data.startDate);
        expect(seasonData.endDate.getAttribute('value')).toEqual(data.endDate);
    });
});