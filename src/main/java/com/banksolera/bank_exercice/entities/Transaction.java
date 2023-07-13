package com.banksolera.bank_exercice.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Transaction {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	Long Id;
	Long accountNumSender;
	Long accountNumReciever;
	
	@OneToMany
	List<Commentary> commentaries = new ArrayList<>();
}
