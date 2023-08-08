package com.banksolera.bank_exercice.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BankAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long Id;
    String accountName;
    String accountNum;
    Double moneyAccount;

    @ManyToOne
    private User user;
    @OneToMany
    private List<Transaction> transactionList = new ArrayList<>();
}
