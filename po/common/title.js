module.exports = new Title();

function Title() {
    var that = this;

    that.title = element(by.binding('applicationTitle'));
}