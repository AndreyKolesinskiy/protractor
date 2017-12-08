"use strict";

module.exports = new Title();

function Title() {
    var that = this;

    that.getTitle = function () {
        return element.all(by.binding('applicationTitle'))
            .map(function (elem) {
                return { text: elem.getText() };
            });
    }
}