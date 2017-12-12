"use strict";

var util = require('../util/util.js'),
    data = require('../data/lab-6.e2e-data.json'),
    title = require('../po/common/title.js'),
    popup = require('../po/common/popup.js'),
    assignmentData = require('../po/specific/assignment/assignmentData.js'),
    menu = require('../po/common/menu.js'),
    publicationTree = require('../po/specific/publication/publicationTree.js'),
    AssignmentTable = require('../po/specific/assignment/assignmentTable.js'),
    AssignmentPopup = require('../po/specific/assignment/assignmentPopup.js'),

    assignmentTable = new AssignmentTable(data),
    assignmentPopup = new AssignmentPopup();

describe('lab 6', function () {

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
        menu.open(data.articleMenuSubElement);
        expect(title.getText()).toEqual(data.title);
    });

    it('should add, check and undo entered value', function () {
        assignmentData.plusButton.click();
        assignmentPopup.setValue(assignmentPopup.publicationPart, data.publicationPart);
        assignmentPopup.setValue(assignmentPopup.page, data.page);
        popup.okButton.click();
        expect(assignmentTable.addedElement.isDisplayed()).toBe(true);

        assignmentTable.arrow.click();
        assignmentTable.number.click();
        expect(assignmentData.eshopNumber.getAttribute('value')).toEqual(data.eshopNumber);

        assignmentData.cancelButton.click();
        expect(assignmentData.eshopNumber.getAttribute('value')).toEqual('');
    });

    afterAll(function () {
        publicationTree.toggleBranch(data.outerNodes, false);
    });
});