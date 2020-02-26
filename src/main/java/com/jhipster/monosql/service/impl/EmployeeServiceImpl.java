package com.jhipster.monosql.service.impl;


import com.jhipster.monosql.domain.Employee;
import com.jhipster.monosql.repository.EmployeeRepository;
import com.jhipster.monosql.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;
    @Override
    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee findById(Long id) {
        Employee employee = employeeRepository.findOne(id);
        return employee;
    }

    @Override
    public void save(Employee employee) {
        employeeRepository.save(employee);
    }

    @Override
    public void delete(Long id) {
        employeeRepository.delete(id);
    }
}
