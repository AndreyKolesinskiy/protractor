"use strict";

module.exports = Matchers;

function Matchers (){
    jasmine.addMatchers({
        toEqualPublicationData: function () {
            return {
                compare: function(publication, publicationData){
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

                    return Promise.all(eq)
                        .then(
                            function () {
                                var result = { pass: true };
                                result.message =  "Equal " + publicationData.number;
                                return result;
                            },
                            function () {
                                var result = { pass: false };
                                result.message =  "NOT Equal " + publicationData.number;
                                return result;
                            }
                        );
                }
            }
        }
    })
}