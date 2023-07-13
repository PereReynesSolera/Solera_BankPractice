package com.banksolera.bank_exercice.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Commentary {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Long Id;
	String comment;

	@ManyToOne
	private User writer;

	@ManyToOne
	private Transaction transaction;

}
