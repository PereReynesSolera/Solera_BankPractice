package com.banksolera.bank_exercice.entities;

public class User {

	String firstName;
	String lastName;
	String userName;
	String password;
	Integer tlfNumber;
	String image;
	
	public User(String firstName, String lastName, String userName, String password, int tlfNumber, String image) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.userName = userName;
		this.password = password;
		this.tlfNumber = tlfNumber;
		this.image = image;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getTlfNumber() {
		return tlfNumber;
	}

	public void setTlfNumber(Integer tlfNumber) {
		this.tlfNumber = tlfNumber;
	}
	
	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
	
}
