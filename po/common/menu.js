module.exports = new Menu();

var util = require('../../util/common.js');

function Menu() {
    var that = this;

    that.open = function (menuText) {
        var menuElement = element(by.partialLinkText(menuText));
        return util.waitVisibilityAndClick(menuElement);
    }
}