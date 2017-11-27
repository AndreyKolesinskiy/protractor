module.exports = new PageTitle();

function PageTitle() {
    var that = this;

    that.title = element(by.binding('applicationTitle'));
}