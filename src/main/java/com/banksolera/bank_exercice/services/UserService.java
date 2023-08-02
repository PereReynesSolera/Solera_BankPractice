package com.banksolera.bank_exercice.services;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.banksolera.bank_exercice.entities.User;
import com.banksolera.bank_exercice.repository.InterUserRepository;

@Service
public class UserService extends CommonService<User, InterUserRepository> {
	@Autowired
	private InterUserRepository userRepository;
	 public ResponseEntity<?> create(User user) {
	 	Optional<User> userOptionalEmail = userRepository.findUserByUserName(user.getUserName());
		if (userOptionalEmail.isPresent()){
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: username is taken");
		} else{
			repository.save(user);
			return ResponseEntity.ok("Ok");
		}
	 }

	public User findByUserName(String userName) {
		return userRepository.findUserByUserName(userName).orElse(null);
	}

}
