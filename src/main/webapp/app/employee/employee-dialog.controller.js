(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .controller('EmployeeDialogController',EmployeeDialogController);

    EmployeeDialogController.$inject = ['$stateParams', '$uibModalInstance', 'entity', 'Employee'];

    function EmployeeDialogController ($stateParams, $uibModalInstance, entity, Employee) {
        var vm = this;

        vm.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        vm.clear = clear;
        vm.languages = null;
        vm.save = save;
        vm.employee = entity;



        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function onSaveSuccess (result) {
            vm.isSaving = false;
            $uibModalInstance.close(result);
        }

        function onSaveError () {
            vm.isSaving = false;
        }

        function save () {
            vm.isSaving = true;
            if (vm.employee.id !== null) {
                Employee.update(vm.employee, onSaveSuccess, onSaveError);
            } else {
                vm.employee.langKey = 'en';
                Employee.save(vm.employee, onSaveSuccess, onSaveError);
            }
        }
    }
})();
