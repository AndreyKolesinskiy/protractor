var util = require('../util/common.js'),
    data = require('../data/lab-1.e2e-data.json'),

    title = require('../po/common/title.js'),
    mainMenu = require('../po/common/mainMenu.js'),
    publicationTree = require('../po/specific/publication/publicationTree.js'),

    PublicationData = require('../po/specific/publication/publicationData.js'),
    publicationData = new PublicationData(data);

describe('lab 1', function () {

    beforeAll(function () {
        util.loadPage();
    });

    it('should set title value by menu element', function () {
        mainMenu.open(data.productionsMenuSubElement);
        expect(title.title.getText()).toEqual(data.productionsMenuSubElement);
    });

    it('should set fields values after click on branch element', function () {
        publicationTree.openCloseBranch(data.outerNodes, true);
        publicationTree.nodeDoubleClick(data.innerNode);
        expect(publicationData.number.getAttribute('value')).toEqual(data.number);
        expect(publicationData.type.getAttribute('value')).toEqual(data.type);
        expect(publicationData.date.getAttribute('value')).toEqual(data.date);
        expect(publicationData.price.getAttribute('value')).toEqual(data.price);
    });

    it('should set fields new values after click on trees element, rollback', function () {
        publicationData.setElementValue(publicationData.number, data.testNumber);
        publicationData.setType(data.testType);
        publicationData.setElementValue(publicationData.date, data.testDate);
        publicationData.setPrice(data.testPrice);
        expect(publicationData.number.getAttribute('value')).toEqual(data.testNumber);
        expect(publicationData.type.getAttribute('value')).toEqual(data.testType);
        expect(publicationData.date.getAttribute('value')).toEqual(data.testDate);
        expect(publicationData.price.getAttribute('value')).toEqual(data.testPrice);

        publicationData.cancelButton.click();
        expect(publicationData.cancelMessage.isPresent()).toBe(true);
    });

    afterAll(function () {
        publicationTree.openCloseBranch(data.outerNodes, false);
    });
});