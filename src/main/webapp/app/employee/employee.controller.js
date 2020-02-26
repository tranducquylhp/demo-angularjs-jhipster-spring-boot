(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .controller('EmployeeController', EmployeeController);

    EmployeeController.$inject = ['Employee'];

    function EmployeeController(Employee) {

        var vm = this;

        vm.employees = [];

        vm.loadAll = loadAll;

        vm.loadAll();

        function loadAll() {
            Employee.query(function(result) {
                vm.employees = result;
                vm.searchQuery = null;
            });
        }
    }
})();
