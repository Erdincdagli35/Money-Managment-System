package com.ed.moneymanagementsystem.service.implementation;

import com.ed.moneymanagementsystem.model.Income;
import com.ed.moneymanagementsystem.model.Person;
import com.ed.moneymanagementsystem.repository.IncomeRepository;
import com.ed.moneymanagementsystem.repository.PersonRepository;
import com.ed.moneymanagementsystem.service.IncomeService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Log4j2
@Service
@AllArgsConstructor
public class IncomeServiceImp implements IncomeService {

    private final IncomeRepository incomeRepository;
    private final PersonRepository personRepository;

    @Override
    public Long create(Income income, Person person) {
        log.info("\nIncome : create");

        List<Income> incomeList = new ArrayList<>();
        incomeList.add(income);
        person.setIncomes(incomeList);

        incomeRepository.save(income);
        personRepository.save(person);
        return income.getId();
    }
}
