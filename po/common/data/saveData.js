module.exports = SaveData;

function SaveData(data) {
    var that = this;
    that.data = data;

    that.undoButton = element(by.css('.fa-undo'));

    that.cancelMessage = element(by.cssContainingText('.cp-text-color', data.cancelMessage));
    that.cancelButton = element(by.css('.fa-undo'));
}