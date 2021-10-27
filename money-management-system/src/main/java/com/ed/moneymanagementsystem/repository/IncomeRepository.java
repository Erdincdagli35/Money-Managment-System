package com.ed.moneymanagementsystem.repository;

import com.ed.moneymanagementsystem.model.Income;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IncomeRepository extends JpaRepository<Income, Long> {
}
