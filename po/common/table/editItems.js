module.exports = new EditItems();

function EditItems() {
    var that = this;

    that.plusButton = element(by.css('.glyphicon-plus'));
    that.minusButton = element(by.css('.glyphicon-minus'));
    that.saveButton = element(by.css('.fa-floppy-o'));
    that.saveFileButton = element(by.css('.glyphicon-file'));
    that.trashButton = element(by.css('.glyphicon-trash'));
}