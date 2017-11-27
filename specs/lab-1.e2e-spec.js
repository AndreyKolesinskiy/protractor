var data = require('../data/lab-1.e2e-data.json');

var pageTitle = require('../po/common/page/pageTitle.js');
var mainMenu = require('../po/common/page/mainMenu.js');
var publicationTree = require('../po/specific/publication/publicationTree.js');

var SaveData = require('../po/common/data/saveData.js');
var PublicationData = require('../po/specific/publication/publicationData.js');

var saveData = new SaveData(data);
var publicationData = new PublicationData();

describe('lab 1', function () {

    beforeAll(function () {
        browser.get(browser.params.baseUrl);
    });
    
    it('should set title value by menu element', function () {
        mainMenu.open(data.productionsMenuSubElement);
        expect(pageTitle.title.getText()).toEqual(data.productionsMenuSubElement);
    });
    
    it('should set fields values after click on branch element', function () {
        publicationTree.selectBranchInnerNode(data.nodes);
        expect(publicationData.number.getAttribute('value')).toEqual(data.number);
        expect(publicationData.type.getAttribute('value')).toEqual(data.type);
        expect(publicationData.date.getAttribute('value')).toEqual(data.date);
        expect(publicationData.price.getAttribute('value')).toEqual(data.price);
    });
    
    it('should set fields new values after click on trees element, rollback', function () {
        publicationData.setValue(publicationData.number, data.testNumber);
        publicationData.setDropdownMenuValue(publicationData.type, 'UP');
        publicationData.setValue(publicationData.date, data.testDate);
        publicationData.setDropdownMenuValue(publicationData.price, 'DOWN');
        expect(publicationData.number.getAttribute('value')).toEqual(data.testNumber);
        expect(publicationData.type.getAttribute('value')).toEqual(data.testType);
        expect(publicationData.date.getAttribute('value')).toEqual(data.testDate);
        expect(publicationData.price.getAttribute('value')).toEqual(data.testPrice);

        saveData.cancelButton.click();
        expect(saveData.cancelMessage.isPresent()).toBe(true);
    });

    afterAll(function () {
        publicationTree.closeBranch(data.nodes);
    });
});
















