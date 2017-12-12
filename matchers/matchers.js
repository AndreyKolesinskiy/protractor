"use strict";

module.exports = {
    toEqualPublication: function () {
        return {
            compare: function (publication, publicationData) {
                var eq =
                    [publication.number.getAttribute('value')
                        .then(function (value) {
                            return (value === publicationData.number);
                        }),
                    publication.type.getAttribute('value')
                        .then(function (value) {
                            return (value === publicationData.type);
                        }),
                    publication.date.getAttribute('value')
                        .then(function (value) {
                            return (value === publicationData.date);
                        }),
                    publication.price.getAttribute('value')
                        .then(function (value) {
                            return (value === publicationData.price);
                        })];

                var msg = "Equal " + publicationData.number;
                return {
                    pass: protractor.promise.all(eq)
                        .then(
                            function (values) {
                                var result = true;
                                values.forEach(function (value) {
                                    if (!value) {
                                        result = false;
                                        msg = "Error";
                                    }
                                });
                                return result;
                            }),
                    message: msg
                }
            }
        }
    }
};