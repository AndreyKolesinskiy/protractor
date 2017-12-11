"use strict";

module.exports = new Title();

function Title() {
    var that = this;

    /**
     *  Возвращает тест элемента title.
     *  Использование map - строго в рамках изучения,
     *  возвращение первого элемента массива - для упрощения спек.
     *  @returns {Promise}
     **/
    that.getTitle = function () {
        return element.all(by.binding('applicationTitle'))
            .map(function (elem) {
                return elem.getText();
            })
            .then(function (value) {
                return value[0];
            });
    }
}