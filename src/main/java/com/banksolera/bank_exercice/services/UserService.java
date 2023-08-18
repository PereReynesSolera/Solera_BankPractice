package com.banksolera.bank_exercice.services;

import com.banksolera.bank_exercice.dto.credentials.LoginCredentials;
import com.banksolera.bank_exercice.dto.response.AuthResponse;
import com.banksolera.bank_exercice.config.ApplicationConfig;
import java.security.InvalidAlgorithmParameterException;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.util.Optional;

import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.banksolera.bank_exercice.entities.User;
import com.banksolera.bank_exercice.repository.InterUserRepository;

@Service
@RequiredArgsConstructor
public class UserService extends CommonService<User, InterUserRepository> {
	@Autowired
	private InterUserRepository userRepository;
	@Autowired
	private JwtService jwtService;

	@Autowired
	private ApplicationConfig applicationConfig;

	 public ResponseEntity<?> create(User user)
			 throws InvalidAlgorithmParameterException, NoSuchAlgorithmException, NoSuchProviderException {
	 	Optional<User> userOptionalEmail = userRepository.findUserByUserName(user.getUserName());
		if (userOptionalEmail.isPresent()){
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: username is taken");
		} else{
			user.setPassword(applicationConfig.passwordEncoder().encode((user.getPassword())));
			repository.save(user);
			AuthResponse auToken = AuthResponse.builder().token(jwtService.getToken(user)).build();
			String token = auToken.getToken();
			return ResponseEntity.ok(token);
		}
	 }

	 @SneakyThrows
	 public AuthResponse login(LoginCredentials loginCredentials, User user){
		 String token=jwtService.getToken(user);
		 return AuthResponse.builder()
				 .token(token)
				 .build();
	 }

	public User findByUserName(String userName) {
		return userRepository.findUserByUserName(userName).orElse(null);
	}

}