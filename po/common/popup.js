"use strict";

module.exports = new Popup();

function Popup() {
    var that = this;

    /* adding popup */
    that.okButton = element(by.buttonText('Anlegen'));

    /* adding popup */
    that.yesButton = element(by.buttonText('Ja'));
}