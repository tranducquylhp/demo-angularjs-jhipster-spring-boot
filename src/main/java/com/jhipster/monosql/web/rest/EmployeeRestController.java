package com.jhipster.monosql.web.rest;

import com.jhipster.monosql.domain.Employee;
import com.jhipster.monosql.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class EmployeeRestController {
    @Autowired
    private EmployeeService employeeService;
    @GetMapping("/employees")
    public ResponseEntity<List<Employee>> findAllEmployee(){
        List<Employee> employees = employeeService.findAll();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> findEmployeeById(@PathVariable Long id){
        Employee employee = employeeService.findById(id);
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @PostMapping("/employees")
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee){
        employeeService.save(employee);
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @PutMapping("/employees")
    public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee){
        employeeService.save(employee);
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable Long id){
        employeeService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
