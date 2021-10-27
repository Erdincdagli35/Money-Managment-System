package com.ed.moneymanagementsystem.model;

import com.ed.moneymanagementsystem.constant.IncomeStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode(of = {"id"})
public class Income {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private IncomeStatus status;

    private Double money;

    @JsonIgnore
    @ManyToOne(targetEntity = Person.class)
    private List<Person> person;
}