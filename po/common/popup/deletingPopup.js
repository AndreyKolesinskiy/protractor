module.exports = new DeletingPopup();

function DeletingPopup() {
    var that = this;

    that.yesButton = element(by.buttonText('Ja'));
}