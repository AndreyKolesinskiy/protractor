module.exports = new SeasonData();

function SeasonData() {
    var that = this;

    that.identity = element(by.model('item.identity'));
    that.name = element(by.model('item.name'));
    that.startDate = element(by.cssContainingText('.row.smallspacer.col-def', 'Startdatum')).$('.form-control.ng-valid.ng-valid-required');
    that.endDate = element(by.cssContainingText('.row.smallspacer.col-def', 'Enddatum')).$('.form-control.ng-valid.ng-valid-required');
}