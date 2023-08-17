package com.banksolera.bank_exercice.controllers;

import com.banksolera.bank_exercice.security.ApplicationConfig;
import java.security.InvalidAlgorithmParameterException;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.util.ArrayList;
import java.util.List;

import com.banksolera.bank_exercice.dto.credentials.LoginCredentials;
import com.banksolera.bank_exercice.dto.request.FriendRequest;
import com.banksolera.bank_exercice.dto.response.FriendResponse;
import com.banksolera.bank_exercice.dto.response.GetUserResponse;
import com.banksolera.bank_exercice.repository.InterUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import com.banksolera.bank_exercice.entities.User;
import com.banksolera.bank_exercice.services.UserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping (path = "/api/user")
public class UserController {

	@Autowired
	UserService userService;
	@Autowired
	InterUserRepository userRepository;

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	private ApplicationConfig applicationConfig;


	@PostMapping(path = "/register")
	public ResponseEntity<?> createUser(@RequestBody User user)
			throws InvalidAlgorithmParameterException, NoSuchAlgorithmException, NoSuchProviderException {
		return userService.create(user);
	}

	@PostMapping(path = "/email")
	public ResponseEntity<?> getUserByEmail(@RequestBody String userName) {
		GetUserResponse gur = new GetUserResponse();
		User us1 = userService.findByUserName(userName);
		gur.setId(us1.getId());
		gur.setFirstName(us1.getFirstName());
		gur.setLastName(us1.getLastName());
		gur.setUserName(us1.getUserName());
		gur.setImage(us1.getImage());
		return ResponseEntity.ok(gur);
	}

	@PostMapping("/login")
	public ResponseEntity<?> checkLogin(@RequestBody LoginCredentials loginCredentials) {
		String userName = loginCredentials.getUserName();
		CharSequence password = loginCredentials.getPassword();

		User user = userService.findByUserName(userName);
		if (user != null) {
			if(applicationConfig.matches(password, user.getPassword())) {
				return ResponseEntity.ok(userService.login(loginCredentials, user));
			} else {
				ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username and password don´t match");
			}
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with username " + userName + " not found.");
		}
		return null;
	}

	@PostMapping("/addfriend")
	@ResponseBody
	public ResponseEntity<?> addFriend(@RequestBody FriendRequest friendRequest) {
		User user = userService.findByUserName(friendRequest.getUserName());
		if(userRepository.findUserByUserName(friendRequest.getFriendUserName()).isPresent()) {
			User friend = userRepository.findUserByUserName(friendRequest.getFriendUserName()).get();
			user.getFriends().add(friend);
			userRepository.save(friend);
			return ResponseEntity.ok(new FriendResponse(friendRequest.getFriendUserName()));
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with username " + friendRequest.getFriendUserName() + " does not exist");
		}
	}

	@PostMapping("/friendlist")
	@ResponseBody
	public ResponseEntity<?> getListFriend(@RequestBody String userName){
		User user = userService.findByUserName(userName);
		if (user != null) {
			List<User> friends = user.getFriends();
			List<GetUserResponse> listFriends = new ArrayList<>();

			for (User friend : friends) {
				GetUserResponse friendResponse = new GetUserResponse();
				friendResponse.setId(friend.getId());
				friendResponse.setFirstName(friend.getFirstName());
				friendResponse.setLastName(friend.getLastName());
				friendResponse.setUserName(friend.getUserName());
				listFriends.add(friendResponse);
			}
			return ResponseEntity.ok(listFriends);
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}