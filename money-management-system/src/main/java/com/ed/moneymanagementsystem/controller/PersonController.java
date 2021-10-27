package com.ed.moneymanagementsystem.controller;

import com.ed.moneymanagementsystem.model.Person;
import com.ed.moneymanagementsystem.repository.PersonRepository;
import com.ed.moneymanagementsystem.service.PersonService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/persons")
@EnableAutoConfiguration
@CrossOrigin
@AllArgsConstructor
public class PersonController {

    @Autowired
    PersonService personService;
    PersonRepository personRepository;

    @GetMapping
    public ResponseEntity<List<Person>> getAll() {
        return ResponseEntity.ok(personService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable Long id) {
        Person person = personRepository.findOneById(id);
        if (person == null) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("There is not a Person : id " + id);
        }
        return ResponseEntity.ok(personService.getById(id));
    }

    @PostMapping
    public ResponseEntity<Long> create(@RequestBody Person person) {
        return ResponseEntity.ok(personService.create(person));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        Person person = personRepository.findOneById(id);
        if (person == null) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("There is not a Person : id " + id);
        }

        personService.delete(person);
        return ResponseEntity.ok("OK");
    }

    @PutMapping
    public ResponseEntity edit(@RequestBody Person person) {
        Person personTemp = personRepository.findOneById(person.getId());
        if (personTemp == null) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("There is not a Person : id " + personTemp.getId());
        }
        return ResponseEntity.ok(personService.edit(person));
    }
}
