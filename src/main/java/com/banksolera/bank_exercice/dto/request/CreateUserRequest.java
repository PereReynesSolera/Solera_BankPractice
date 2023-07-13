package com.banksolera.bank_exercice.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateUserRequest {
	private String firstName;
	private String lastName;
	private String userName;
	private String password;
	private Integer tlfNumber;
	private String image;
}