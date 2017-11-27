var util = require('../util/common.js');
var data = require('../data/lab-5.e2e-data.json');

var pageTitle = require('../po/common/page/pageTitle.js');
var editItems = require('../po/common/table/editItems.js');

var MainMenu = require('../po/common/page/mainMenu.js');

var mainMenu = new MainMenu(data);

describe('lab 5 - seitenplanung page', function () {
    var that = this;
        
    beforeAll(function () {
        browser.get(browser.params.baseUrl);
    });

    it('lab 5, step 1 - should set title value by menu element', function () {
        mainMenu.productionsMenuSubElement.click();
        expect(pageTitle.title.getText()).toEqual(data.productionsMenuSubElement);
    });

    it('lab 5, step 2 - 3 - should set title value like menus element', function () {
        util.selectBranchInnerNode(data.nodes);
        mainMenu.menuElement.click();
        mainMenu.pageMenuSubElement.click();
        expect(pageTitle.title.getText()).toEqual(data.pageMenuSubElement);
    });
    
    it('lab 5, step 4 - should save file', function () {
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
        util.closeBranch([data.nodes[0], data.nodes[1]]);
    });    
});