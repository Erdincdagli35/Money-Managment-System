package com.ed.moneymanagementsystem.service;

import com.ed.moneymanagementsystem.model.Income;
import com.ed.moneymanagementsystem.model.Person;

import java.util.List;

public interface IncomeService {
    Long create(Income income, Person person);

    List<Income> getByPersonId(Person person);
}
