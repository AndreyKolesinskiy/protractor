var util = require('../util/common.js');
var data = require('../data/lab-5.e2e-data.json');

var pageTitle = require('../po/common/page/pageTitle.js');
var editItems = require('../po/common/table/editItems.js');
var mainMenu = require('../po/common/page/mainMenu.js');
var publicationTree = require('../po/specific/publication/publicationTree.js');

describe('lab 5', function () {
    var that = this;
        
    beforeAll(function () {
        browser.get(browser.params.baseUrl);
    });

    it('should set title value by menu element', function () {
        mainMenu.open(data.productionsMenuSubElement);
        expect(pageTitle.title.getText()).toEqual(data.productionsMenuSubElement);
    });

    it('should set title value like menus element', function () {
        publicationTree.selectBranchInnerNode(data.nodes);
        mainMenu.open(data.menuElement);
        mainMenu.open(data.pageMenuSubElement);
        expect(pageTitle.title.getText()).toEqual(data.pageMenuSubElement);
    });
    
    it('should save file', function () {
        expect(that.saveFile(editItems.saveFileButton)).toBe(true);
    });

    /**
     * Скачивает файл
     * @param {element} saveButton - кнопка, после нажатия которой начинается скачивание
     * @returns {boolean} - статус загрузки
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
        publicationTree.closeBranch(data.nodes);
    });    
});