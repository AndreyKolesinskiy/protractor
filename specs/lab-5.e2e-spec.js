var util = require('../util/common.js');
var data = require('../data/lab-5.e2e-data.json');

var title = require('../po/common/title.js');
var menu = require('../po/common/menu.js');
var publicationTree = require('../po/specific/publication/publicationTree.js');

var Button = require('../po/common/button.js');
var button = new Button(data);

describe('lab 5', function () {
    var that = this;
        
    beforeAll(function () {
        util.loadPage();
    });

    it('should set title value by menu element', function () {
        menu.open(data.productionsMenuSubElement);
        expect(title.title.getText()).toEqual(data.productionsMenuSubElement);
    });

    it('should set title value like menus element', function () {
        publicationTree.selectBranchInnerNode(data.nodes);
        menu.open(data.menuElement);
        menu.open(data.pageMenuSubElement);
        expect(title.title.getText()).toEqual(data.pageMenuSubElement);
    });
    
    it('should save file', function () {
        expect(that.saveFile(button.saveFileButton)).toBe(true);
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
        publicationTree.closeBranch(data.nodes);
    });    
});