"use strict";

var util = require('../util/common.js'),
data = require('../data/lab-6.e2e-data.json'),

title = require('../po/common/title.js'),
popup = require('../po/common/popup.js'),
assignmentData = require('../po/specific/assignment/assignmentData.js'),
assignmentTable = require('../po/specific/assignment/assignmentTable.js'),
mainMenu = require('../po/common/mainMenu.js'),
publicationTree = require('../po/specific/publication/publicationTree.js'),

AssignmentPopup = require('../po/specific/assignment/assignmentPopup.js'),
assignmentPopup = new AssignmentPopup(data);

describe('lab 6', function () {
    var that = this;

    beforeAll(function () {
        util.loadPage();
    });

    it('should set title value by menu element', function () {
        mainMenu.open(data.productionsMenuSubElement);
        expect(title.title.getText()).toEqual(data.productionsMenuSubElement);
    });

    it('should set title value like menus element', function () {
        publicationTree.openCloseBranch(data.outerNodes, true);
        publicationTree.nodeDoubleClick(data.innerNode);
        mainMenu.open(data.menuElement);
        mainMenu.open(data.articleMenuSubElement);
        expect(title.title.getText()).toEqual(data.title);
    });

    it('should add, check and undo entered value', function () {
        assignmentData.plusButton.click();
        assignmentPopup.setPublicationPart(data);
        assignmentPopup.setPage(data);
        popup.okButton.click();
        expect(assignmentTable.addedElement.isPresent()).toBe(true);

        that.focusAndSetDropdownMenuValue();
        expect(assignmentData.eshopNumber.getAttribute('value')).toEqual(data.eshopNumber);

        assignmentData.cancelButton.click();
        expect(assignmentData.eshopNumber.getAttribute('value')).toEqual('');
    });

    /**
     * Фокусировка на текущем элементе и присвоение ему значения из выпадающего списка
     * @returns {Promise.<void>}
     */
    /* TODO: focusAndSetDropdownMenuValue - WAITING OF NEW MONITOR */
    that.focusAndSetDropdownMenuValue = function () {
        return browser
            .actions()
            .sendKeys(protractor.Key.ENTER)
            .sendKeys(protractor.Key.ARROW_DOWN)
            .sendKeys(protractor.Key.ENTER)
            .perform();
    };

    afterAll(function () {
        publicationTree.openCloseBranch(data.outerNodes, false);
    });
});