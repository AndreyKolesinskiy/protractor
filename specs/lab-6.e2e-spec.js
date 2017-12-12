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
assignmentPopup = new AssignmentPopup();

describe('lab 6', function () {

    beforeAll(function () {
        util.loadPage();
    });

    it('should set title value by menu element', function () {
        mainMenu.open(data.productionsMenuSubElement);
        expect(title.getTitle()).toEqual(data.productionsMenuSubElement);
    });

    it('should set title value like menus element', function () {
        publicationTree.toggleBranch(data.outerNodes, true);
        publicationTree.nodeDoubleClick(data.innerNode);
        mainMenu.open(data.menuElement);
        mainMenu.open(data.articleMenuSubElement);
        expect(title.getTitle()).toEqual(data.title);
    });

    it('should add, check and undo entered value', function () {
        assignmentData.plusButton.click();
        assignmentPopup.setValue(assignmentPopup.publicationPart, data.publicationPart);
        assignmentPopup.setValue(assignmentPopup.page, data.page);
        popup.okButton.click();
        expect(assignmentTable.addedElement.isDisplayed()).toBe(true);

        focusAndSetDropdownMenuValue();
        expect(assignmentData.eshopNumber.getAttribute('value')).toEqual(data.eshopNumber);

        assignmentData.cancelButton.click();
        expect(assignmentData.eshopNumber.getAttribute('value')).toEqual('');
    });

    /**
     * Фокусировка на текущем элементе и присвоение ему значения из выпадающего списка
     * @returns {Promise.<void>}
     */
    /* TODO: focusAndSetDropdownMenuValue - WAITING OF NEW MONITOR */
    var focusAndSetDropdownMenuValue = function () {
        return browser
            .actions()
            .sendKeys(protractor.Key.ENTER)
            .sendKeys(protractor.Key.ARROW_DOWN)
            .sendKeys(protractor.Key.ENTER)
            .perform();
    };

    afterAll(function () {
        publicationTree.toggleBranch(data.outerNodes, false);
    });
});