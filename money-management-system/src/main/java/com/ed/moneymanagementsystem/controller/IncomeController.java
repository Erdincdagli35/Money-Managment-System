package com.ed.moneymanagementsystem.controller;

import com.ed.moneymanagementsystem.model.Income;
import com.ed.moneymanagementsystem.model.Person;
import com.ed.moneymanagementsystem.repository.PersonRepository;
import com.ed.moneymanagementsystem.service.IncomeService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/incomes")
@EnableAutoConfiguration
@CrossOrigin
@AllArgsConstructor
public class IncomeController {

    @Autowired
    IncomeService incomeService;
    PersonRepository personRepository;

    @PostMapping("/{personId}")
    public ResponseEntity create(@RequestBody Income income,
                                 @PathVariable("personId") Long personId) {
        Person person = personRepository.findOneById(personId);
        if (person == null) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("There is not a Person : id " + personId);
        }
        return ResponseEntity.ok(incomeService.create(income, person));
    }

    @GetMapping("/{personId}")
    public ResponseEntity getByPersonId(@PathVariable("personId") Long personId) {
        Person person = personRepository.findOneById(personId);
        if (person == null) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("There is not a Person : id " + personId);
        }
        return ResponseEntity.ok(incomeService.getByPersonId(person));
    }
}
