package com.ed.moneymanagementsystem.service;

import com.ed.moneymanagementsystem.model.Person;

import java.util.List;

public interface PersonService {
    List<Person> getAll();

    Person getById(Long id);

    Long create(Person person);

    void delete(Person person);

    Person edit(Person person);
}