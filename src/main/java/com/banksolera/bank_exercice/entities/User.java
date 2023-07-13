package com.banksolera.bank_exercice.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Long id;
	String firstName;
	String lastName;
	String userName;
	String password;
	Integer tlfNumber;
	String image;

	@ManyToMany(fetch = FetchType.EAGER)
	private Set<User> friends = new HashSet<>();

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "users_bankaccounts", 
	joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"), 
	inverseJoinColumns = @JoinColumn(name = "bankaccount_id", referencedColumnName = "id"))	
	private List<BankAccount> listBankAccount = new ArrayList<>();
}
