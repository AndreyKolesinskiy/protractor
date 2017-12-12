"use strict";

module.exports = new Popup();

function Popup() {
    var that = this;

    that.okButton = element(by.buttonText('Anlegen'));
    that.yesButton = element(by.buttonText('Ja'));
}