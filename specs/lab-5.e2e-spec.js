"use strict";

var util = require('../util/common.js'),
data = require('../data/lab-5.e2e-data.json'),

title = require('../po/common/title.js'),
mainMenu = require('../po/common/mainMenu.js'),
publicationTree = require('../po/specific/publication/publicationTree.js');

describe('lab 5', function () {
    var that = this;
        
    beforeAll(function () {
        util.loadPage();
    });

    it('should set title value by menu element', function () {
        mainMenu.open(data.productionsMenuSubElement);
        expect(title.getTitle()).toEqual(data.productionsMenuSubElement);
    });

    it('should set title value like menus element', function () {
        publicationTree.openCloseBranch(data.outerNodes, true);
        publicationTree.nodeDoubleClick(data.innerNode);
        mainMenu.open(data.menuElement);
        mainMenu.open(data.pageMenuSubElement);
        expect(title.getTitle()).toEqual(data.pageMenuSubElement);
    });
    
    it('should save file', function () {
        expect(that.saveFile(publicationTree.saveFileButton)).toBe(true);
    });

    /**
     * Скачивает файл
     * @param {ElementFinder} saveButton - кнопка, после нажатия которой начинается скачивание
     * @returns {Promise.<boolean>} - статус загрузки
     */
    that.saveFile = function (saveButton) {
        var path = browser.params.downloading.path + browser.params.downloading.fileName;
        var fs = require('fs');

        if (fs.existsSync(path)) {
            fs.unlinkSync(path);
        }
        util.waitVisibilityAndClick(saveButton);

        return browser
            .driver
            .wait(function () {
                return fs.existsSync(path);
            }, browser
                .params
                .visibilityWaitingTime
                .fileDownloading);
    };

    afterAll(function () {
        publicationTree.openCloseBranch(data.outerNodes, false);
    });    
});