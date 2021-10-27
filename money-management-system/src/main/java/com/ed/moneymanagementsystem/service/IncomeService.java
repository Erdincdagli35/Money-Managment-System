package com.ed.moneymanagementsystem.service;

import com.ed.moneymanagementsystem.model.Income;
import com.ed.moneymanagementsystem.model.Person;

public interface IncomeService {
    Long create(Income income, Person person);
}
