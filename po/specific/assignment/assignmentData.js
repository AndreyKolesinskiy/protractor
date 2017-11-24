module.exports = new AssignmentData();

function AssignmentData() {
    var that = this;

    that.eshopNumber = element.all(by.repeater('tab in tabs')).first().element(by.css('.input-sm.form-control'));
}