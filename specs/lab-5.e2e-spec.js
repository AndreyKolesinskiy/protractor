"use strict";

var util = require('../util/util.js'),
    data = require('../data/lab-5.e2e-data.json'),

    title = require('../po/common/title.js'),
    menu = require('../po/common/menu.js'),
    publicationTree = require('../po/specific/publication/publicationTree.js');

describe('lab 5', function () {
        
    beforeAll(function () {
        util.loadPage();
    });

    it('should set title value by menu element', function () {
        menu.open(data.productionsMenuSubElement);
        expect(title.getText()).toEqual(data.productionsMenuSubElement);
    });

    it('should set title value like menus element', function () {
        publicationTree.toggleBranch(data.outerNodes, true);
        publicationTree.toggleInnerNode(data.innerNode);
        menu.open(data.menuElement);
        menu.open(data.pageMenuSubElement);
        expect(title.getText()).toEqual(data.pageMenuSubElement);
    });
    
    it('should save file', function () {
        util.removeFile(browser.params.downloading.path + browser.params.downloading.fileName);
        util.clickAfterDrawing(publicationTree.saveFileButton, 'publicationTree.saveFileButton');
        expect(util.checkExistFile(browser.params.downloading.path + browser.params.downloading.fileName)).toBe(true);
    });

    afterAll(function () {
        publicationTree.toggleBranch(data.outerNodes, false);
    });
});