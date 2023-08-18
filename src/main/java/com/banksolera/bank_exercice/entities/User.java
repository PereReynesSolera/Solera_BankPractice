package com.banksolera.bank_exercice.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.*;

import java.util.List;
import java.util.ArrayList;
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
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
	private List<User> friends = new ArrayList<>();
}
