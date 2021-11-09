package com.ed.moneymanagementsystem.repository;

import com.ed.moneymanagementsystem.model.Income;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IncomeRepository extends JpaRepository<Income, Long> {
    List<Income> findAllByPerson_Id(Long personId);
}
