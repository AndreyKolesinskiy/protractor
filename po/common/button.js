module.exports = new Button();

function Button() {
    var that = this;

    /* save data panel */
    that.cancelMessage = element(by.cssContainingText('.cp-text-color', 'Noch nichts geändert'));
    that.cancelButton = element(by.css('.fa-undo'));

    /* edit items panel */
    that.plusButton = element(by.css('.btn-toolbar')).$('.glyphicon-plus');
    that.minusButton = element(by.css('.glyphicon-minus'));
    that.saveButton = element(by.css('.fa-floppy-o'));
    that.saveFileButton = element(by.css('.glyphicon-file'));
    that.trashButton = element(by.css('.glyphicon-trash'));
}