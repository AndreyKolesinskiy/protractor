module.exports = new PrivilegePopup();

function PrivilegePopup() {
    var that = this;

    that.popupNameField = element.all(by.model('item.name')).last();
}