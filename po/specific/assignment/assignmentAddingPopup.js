module.exports = new AssignmentAddingPopup();

function AssignmentAddingPopup() {
    var that = this;

    that.publicationPart = element(by.model('item.publicationPart'));
    that.page = element(by.model('item.page'));
}