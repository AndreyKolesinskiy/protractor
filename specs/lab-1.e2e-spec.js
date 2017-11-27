var util = require('../util/common.js');
var data = require('../data/lab-1.e2e-data.json');

var pageTitle = require('../po/common/page/pageTitle.js');
var publicationData = require('../po/specific/publication/publicationData.js');

var MainMenu = require('../po/common/page/mainMenu.js');
var SaveData = require('../po/common/data/saveData.js');

var mainMenu = new MainMenu(data);
var saveData = new SaveData(data);

describe('lab 1', function () {

    beforeAll(function () {
        browser.get(browser.params.baseUrl);
    });
    
    it('should set title value by menu element', function () {
        mainMenu.productionsMenuSubElement.click();
        expect(pageTitle.title.getText()).toEqual(data.productionsMenuSubElement);
    });
    
    it('should set fields values after click on branch element', function () {
        util.selectBranchInnerNode(data.nodes);
        expect(publicationData.number.getAttribute('value')).toEqual(data.number);
        expect(publicationData.type.getAttribute('value')).toEqual(data.type);
        expect(publicationData.date.getAttribute('value')).toEqual(data.date);
        expect(publicationData.price.getAttribute('value')).toEqual(data.price);
    });
    
    it('should set fields new values after click on trees element, rollback', function () {
        util.setValue(publicationData.number, data.testNumber);
        util.setDropdownMenuValue(publicationData.type, 'UP');
        util.setValue(publicationData.date, data.testDate);
        util.setDropdownMenuValue(publicationData.price, 'DOWN');
        expect(publicationData.number.getAttribute('value')).toEqual(data.testNumber);
        expect(publicationData.type.getAttribute('value')).toEqual(data.testType);
        expect(publicationData.date.getAttribute('value')).toEqual(data.testDate);
        expect(publicationData.price.getAttribute('value')).toEqual(data.testPrice);

        saveData.cancelButton.click();
        expect(saveData.cancelMessage.isPresent()).toBe(true);
    });

    afterAll(function () {
        util.closeBranch([data.nodes[0], data.nodes[1]]);
    });
});
















