module.exports = new PrivilegeAddingPopup();

function PrivilegeAddingPopup() {
    var that = this;

    that.popupNameField = element.all(by.model('item.name')).last();
}