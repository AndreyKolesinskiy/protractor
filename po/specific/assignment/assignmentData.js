module.exports = new AssignmentData();

function AssignmentData() {
    var that = this;

    that.eshopNumber = element(by.cssContainingText('.row.smallspacer.col-def', 'EShop-Nr.')).$('.input-sm.form-control');
    that.cancelButton = element(by.css('.fa-undo'));
    that.plusButton = element(by.css('.btn-toolbar')).$('.glyphicon-plus');
}