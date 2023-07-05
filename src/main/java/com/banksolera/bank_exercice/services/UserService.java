package com.banksolera.bank_exercice.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.banksolera.bank_exercice.entities.User;
import jakarta.validation.Valid;

@Component
public class UserService {
	List<User> userList = new ArrayList<>();
	
	public User createUser(@Valid User user) {
		userList.add(user);
		return user;
	}
 }
