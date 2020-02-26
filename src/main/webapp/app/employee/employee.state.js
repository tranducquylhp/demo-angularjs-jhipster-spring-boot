(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('employee', {
            parent: 'app',
            url: '/employee',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'Employee'
            },
            views: {
                'content@': {
                    templateUrl: 'app/employee/employee.html',
                    controller: 'EmployeeController',
                    controllerAs: 'vm'
                }
            }
        })
            .state('employee.edit', {
                parent: 'employee',
                url: '/{id}/edit',
                data: {
                    authorities: ['ROLE_ADMIN']
                },
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: 'app/employee/employee-dialog.html',
                        controller: 'EmployeeDialogController',
                        controllerAs: 'vm',
                        backdrop: 'static',
                        size: 'lg',
                        resolve: {
                            entity: ['Employee', function(Employee) {
                                return Employee.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function() {
                        $state.go('employee', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    });
                }]
            })
            .state('employee.delete', {
                parent: 'employee',
                url: '/{id}/delete',
                data: {
                    authorities: ['ROLE_ADMIN']
                },
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: 'app/employee/employee-delete-dialog.html',
                        controller: 'EmployeeDeleteController',
                        controllerAs: 'vm',
                        size: 'md',
                        resolve: {
                            entity: ['Employee', function(Employee) {
                                return Employee.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function() {
                        $state.go('employee', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    });
                }]
            });;
    }
})();
