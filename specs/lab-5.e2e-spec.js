"use strict";

var util = require('../util/common.js'),
data = require('../data/lab-5.e2e-data.json'),

title = require('../po/common/title.js'),
mainMenu = require('../po/common/mainMenu.js'),
publicationTree = require('../po/specific/publication/publicationTree.js');

describe('lab 5', function () {
        
    beforeAll(function () {
        util.loadPage();
    });

    it('should set title value by menu element', function () {
        mainMenu.open(data.productionsMenuSubElement);
        expect(title.getTitle()).toEqual(data.productionsMenuSubElement);
    });

    it('should set title value like menus element', function () {
        publicationTree.toggleBranch(data.outerNodes, true);
        publicationTree.toggleInnerNode(data.innerNode);
        mainMenu.open(data.menuElement);
        mainMenu.open(data.pageMenuSubElement);
        expect(title.getTitle()).toEqual(data.pageMenuSubElement);
    });
    
    it('should save file', function () {
        util.removeFile(browser.params.downloading.path + browser.params.downloading.fileName);
        util.waitVisibilityAndClick(publicationTree.saveFileButton);
        expect(util.checkExistFile(browser.params.downloading.path + browser.params.downloading.fileName)).toBe(true);
    });

    afterAll(function () {
        publicationTree.toggleBranch(data.outerNodes, false);
    });
});