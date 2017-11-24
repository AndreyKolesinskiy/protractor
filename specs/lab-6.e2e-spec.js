var util = require('../util/common.js');
var data = require('../data/lab-6.e2e-data.json');

var pageTitle = require('../po/common/page/pageTitle.js');
var editItems = require('../po/common/table/editItems.js');
var addingPopup = require('../po/common/popup/addingPopup.js');
var assignmentAddingPopup = require('../po/specific/assignment/assignmentAddingPopup.js');
var assignmentData = require('../po/specific/assignment/assignmentData.js');
var assignmentTable = require('../po/specific/assignment/assignmentTable.js');

var MainMenu = require('../po/common/page/mainMenu.js');
var SaveData = require('../po/common/data/saveData.js');

var mainMenu = new MainMenu(data);
var saveData = new SaveData(data);

describe('lab 6 - artikelzuordnung page', function () {
    var that = this;

    beforeAll(function () {
        browser.get(browser.params.baseUrl);
    });

    it('lab 6, step 1 - should set title value by menu element', function () {
        mainMenu.productionsMenuSubElement.click();
        expect(pageTitle.title.getText()).toEqual(data.productionsMenuSubElement);
    });

    it('lab 6, step 2 - should set title value like menus element', function () {
        util.selectBranchInnerNode(data.nodes);
        mainMenu.menuElement.click();
        mainMenu.articleMenuSubElement.click();
        expect(pageTitle.title.getText()).toEqual(data.title);
    });

    it('lab 6, step 3 - 6 - should add, check and undo entered value', function () {
        editItems.plusButton.click();
        util.setDropdownMenuValue(assignmentAddingPopup.publicationPart, 'DOWN');
        util.setDropdownMenuValue(assignmentAddingPopup.page, 'DOWN');
        addingPopup.okButton.click();
        expect(assignmentTable.addedElement.isPresent()).toBe(true);

        that.focusAndSetDropdownMenuValue();
        expect(assignmentData.eshopNumber.getAttribute('value')).toEqual(data.eshopNumber);

        saveData.cancelButton.click();
        expect(assignmentData.eshopNumber.getAttribute('value')).toEqual('');
    });

    /**
     * Фокусировка на текущем элементе и присвоение ему значения из выпадающего списка
     */
    /* TODO: focusAndSetDropdownMenuValue - WAITING OF NEW MONITOR */
    that.focusAndSetDropdownMenuValue = function () {
        browser.actions()
            .sendKeys(protractor.Key.ENTER)
            .sendKeys(protractor.Key.ARROW_DOWN)
            .sendKeys(protractor.Key.ENTER)
            .perform();
    };

    afterAll(function () {
        util.closeBranch([data.nodes[0], data.nodes[1]]);
    });
});