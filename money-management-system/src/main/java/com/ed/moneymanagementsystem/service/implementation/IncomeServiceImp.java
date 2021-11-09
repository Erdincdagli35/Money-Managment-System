package com.ed.moneymanagementsystem.service.implementation;

import com.ed.moneymanagementsystem.model.Income;
import com.ed.moneymanagementsystem.model.Person;
import com.ed.moneymanagementsystem.repository.IncomeRepository;
import com.ed.moneymanagementsystem.repository.PersonRepository;
import com.ed.moneymanagementsystem.service.IncomeService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;

@Log4j2
@Service
@AllArgsConstructor
public class IncomeServiceImp implements IncomeService {

    private final IncomeRepository incomeRepository;
    private final PersonRepository personRepository;

    @Override
    public Long create(Income income, Person person) {
        log.info("\nIncome : create");

        List<Income> incomeTemp = incomeRepository.findAllByPerson_Id(person.getId());
        if (incomeTemp == null || incomeTemp.size() == 0) {
            income = incomeRepository.save(income);
            income.setPerson(person);
            personRepository.save(person);
            return income.getId();
        }

        income = incomeRepository.save(income);
        incomeTemp.add(income);
        income.setPerson(person);

        personRepository.save(person);
        return income.getId();
    }

    @Override
    public List<Income> getByPersonId(Person person) {
        log.info("\nIncome : getByPersonId");
        return incomeRepository.findAllByPerson_Id(person.getId());
    }
}
