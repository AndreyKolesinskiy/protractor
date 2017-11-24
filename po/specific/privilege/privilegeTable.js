module.exports = new PrivilegesTable();

function PrivilegesTable() {
    var that = this;

    that.firstListItem = element(by.repeater('item in items').row(0));
    that.secondListItem = element(by.repeater('item in items').row(1));
}