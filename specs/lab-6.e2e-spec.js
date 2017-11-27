var data = require('../data/lab-6.e2e-data.json');

var pageTitle = require('../po/common/title.js');
var popup = require('../po/common/popups.js');
var assignmentData = require('../po/specific/assignment/assignmentData.js');
var assignmentTable = require('../po/specific/assignment/assignmentTable.js');
var mainMenu = require('../po/common/menu.js');
var publicationTree = require('../po/specific/publication/publicationTree.js');

var AssignmentAddingPopup = require('../po/specific/assignment/assignmentAddingPopup.js');
var ButtonPanels = require('../po/common/buttons.js');

var buttonPanels = new ButtonPanels(data);
var assignmentAddingPopup = new AssignmentAddingPopup();

describe('lab 6', function () {
    var that = this;

    beforeAll(function () {
        browser.get(browser.params.baseUrl);
    });

    it('should set title value by menu element', function () {
        mainMenu.open(data.productionsMenuSubElement);
        expect(pageTitle.title.getText()).toEqual(data.productionsMenuSubElement);
    });

    it('should set title value like menus element', function () {
        publicationTree.selectBranchInnerNode(data.nodes);
        mainMenu.open(data.menuElement);
        mainMenu.open(data.articleMenuSubElement);
        expect(pageTitle.title.getText()).toEqual(data.title);
    });

    it('should add, check and undo entered value', function () {
        buttonPanels.plusButton.click();
        assignmentAddingPopup.setDropdownMenuValue(assignmentAddingPopup.publicationPart, 'DOWN');
        assignmentAddingPopup.setDropdownMenuValue(assignmentAddingPopup.page, 'DOWN');
        popup.okButton.click();
        expect(assignmentTable.addedElement.isPresent()).toBe(true);

        that.focusAndSetDropdownMenuValue();
        expect(assignmentData.eshopNumber.getAttribute('value')).toEqual(data.eshopNumber);

        buttonPanels.cancelButton.click();
        expect(assignmentData.eshopNumber.getAttribute('value')).toEqual('');
    });

    /**
     * Фокусировка на текущем элементе и присвоение ему значения из выпадающего списка
     */
    /* TODO: focusAndSetDropdownMenuValue - WAITING OF NEW MONITOR */
    that.focusAndSetDropdownMenuValue = function () {
        browser
            .actions()
            .sendKeys(protractor.Key.ENTER)
            .sendKeys(protractor.Key.ARROW_DOWN)
            .sendKeys(protractor.Key.ENTER)
            .perform();
    };

    afterAll(function () {
        publicationTree.closeBranch(data.nodes);
    });
});