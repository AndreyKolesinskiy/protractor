"use strict";

var util = require('../util/util.js'),
    data = require('../data/lab-1.e2e-data.json'),

    title = require('../po/common/title.js'),
    menu = require('../po/common/menu.js'),
    publicationTree = require('../po/specific/publication/publicationTree.js'),

    PublicationData = require('../po/specific/publication/publicationData.js'),
    publicationData = new PublicationData(data);

describe('lab 1', function () {

    beforeAll(function () {
        util.loadPage();
    });

    it('should set title value by menu element', function () {
        menu.open(data.productionsMenuSubElement);
        expect(title.getText()).toEqual(data.productionsMenuSubElement);
    });

    it('should set fields values after click on branch element', function () {
        publicationTree.toggleBranch(data.outerNodes, true);
        publicationTree.toggleInnerNode(data.innerNode);
        expect(publicationData.publication).toEqualPublicationData(data.nodePublication);
    });

    it('should set fields new values after click on trees element, rollback', function () {
        publicationData.setValue(publicationData.publication.type, data.newPublication.type);
        publicationData.setValue(publicationData.publication.price, data.newPublication.price);
        publicationData.setElementValue(publicationData.publication.number, data.newPublication.number);
        publicationData.setElementValue(publicationData.publication.date, data.newPublication.date);
        expect(publicationData.publication).toEqualPublicationData(data.newPublication);

        publicationData.cancelButton.click();
        expect(publicationData.cancelMessage.isDisplayed()).toBe(true);
    });

    afterAll(function () {
        publicationTree.toggleBranch(data.outerNodes, false);
    });
});