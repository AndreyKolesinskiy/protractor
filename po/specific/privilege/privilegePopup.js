module.exports = new PrivilegePopup();

function PrivilegePopup() {
    var that = this;

    that.popupNameField = element(by.css('.modal-body .col-def')).all(by.model('item.name'));
}