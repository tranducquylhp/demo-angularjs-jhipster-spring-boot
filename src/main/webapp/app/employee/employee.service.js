(function() {
    'use strict';
    angular
        .module('jhipsterApp')
        .factory('Employee', Employee);

    Employee.$inject = ['$resource'];

    function Employee ($resource) {
        var resourceUrl =  'employees/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'save': { method:'POST' },
            'update': { method:'PUT' },
            'delete':{ method:'DELETE'}
        });
    }
})();
