var page = require('../pages/planing.e2e-po.js');
var util = require('../util/common.js');
var data = require('../data/planing.e2e-data.json');

describe('lab 5 - seitenplanung page', function () {
    var that = this;
        
    beforeAll(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });

    it('lab 5, step 1 - should set title value by menu element', function () {
        page.productionsMenuElement.click();
        expect(page.title.getText()).toEqual(data.productionsMenuElement);
    });

    it('lab 5, step 2 - 3 - should set title value like menus element', function () {
        util.selectBranchInnerNode(data.nodes);
        page.menuElement.click();
        page.menuSubElement.click();
        expect(page.title.getText()).toEqual(data.menuSubElement);
    });
    
    it('lab 5, step 4 - should save file', function () {
        expect(that.saveFile(page.saveButton)).toBe(true);
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

        return browser.driver.wait(function() {
            return fs.existsSync(path);
        }, browser.params.visibilityWaitingTime.fileDownloading);
    };

    afterAll(function () {
        util.closeBranch([data.nodes[0], data.nodes[1]]);
    });    
});