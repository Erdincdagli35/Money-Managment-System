package com.ed.moneymanagementsystem.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode(of = {"id"})
public class Expenditure {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "expenditure_id")
    private List<Home> homeCosts = new ArrayList<>();

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "expenditure_id")
    private CreditCard creditCards;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "expenditure_id")
    private List<Subscription> subscriptions = new ArrayList<>();
}