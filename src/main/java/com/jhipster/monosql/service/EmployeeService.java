package com.jhipster.monosql.service;

import com.jhipster.monosql.domain.Employee;

import java.util.List;

public interface EmployeeService {
    List<Employee> findAll();
    Employee findById(Long id);
    void save(Employee employee);
    void delete(Long id);
}
