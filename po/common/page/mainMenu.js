module.exports = new MainMenu();

var util = require('../../../util/common.js');

function MainMenu() {
    var that = this;

    that.open = function (menuText) {
        var menuElement = element(by.partialLinkText(menuText));
        util.waitVisibilityAndClick(menuElement);
    }
}