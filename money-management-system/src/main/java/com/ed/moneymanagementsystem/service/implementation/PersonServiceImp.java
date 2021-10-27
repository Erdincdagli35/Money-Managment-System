package com.ed.moneymanagementsystem.service.implementation;

import com.ed.moneymanagementsystem.model.Person;
import com.ed.moneymanagementsystem.repository.PersonRepository;
import com.ed.moneymanagementsystem.response.PersonDetailResponse;
import com.ed.moneymanagementsystem.service.PersonService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Log4j2
@Service
@AllArgsConstructor
public class PersonServiceImp implements PersonService {

    @Autowired
    PersonRepository personRepository;

    @Override
    public List<Person> getAll() {
        log.info("\nPerson : getAll");
        return personRepository.findAllByOrderById();
    }

    @Override
    public Person getById(Long id) {
        log.info("\nPerson : getById\n");
        return personRepository.findOneById(id);
    }

    @Override
    public Long create(Person person) {
        log.info("\nPerson : create\n");
        person = personRepository.save(person);
        return person.getId();
    }

    @Override
    public void delete(Person person) {
        log.info("\nPerson : delete\n");
        personRepository.delete(person);
    }

    @Override
    public Person edit(Person person) {
        log.info("\nPerson : edit\n");
        person = personRepository.save(person);
        return person;
    }
}