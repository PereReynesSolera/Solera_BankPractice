package com.banksolera.bank_exercice.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
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
	String accountNum;
	Double moneyAccount;

    @ManyToMany(mappedBy = "listBankAccount")
    private List<User> userList = new ArrayList<>();
    @OneToMany
    private List<Transaction> transactionList = new ArrayList<>();
}
