module.exports = Button;

function Button(data) {
    var that = this;
    that.data = data;

    /* save data panel */
    that.cancelMessage = element(by.cssContainingText('.cp-text-color', data.cancelMessage));
    that.cancelButton = element(by.css('.fa-undo'));

    /* edit items panel */
    that.plusButton = element.all(by.css('.glyphicon-plus')).first();
    that.minusButton = element(by.css('.glyphicon-minus'));
    that.saveButton = element(by.css('.fa-floppy-o'));
    that.saveFileButton = element(by.css('.glyphicon-file'));
    that.trashButton = element(by.css('.glyphicon-trash'));
}