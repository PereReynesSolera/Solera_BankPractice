package com.banksolera.bank_exercice.entities;

import com.banksolera.bank_exercice.entities.User;

public class InfoBank {
	Double moneyAccount;
	String accountNum;
	
	public InfoBank(double moneyAccount, String accountNum) {
		super();
		this.moneyAccount = moneyAccount;
		this.accountNum = accountNum;
	}

	public Double getMoneyAccount() {
		return moneyAccount;
	}

	public void setMoneyAccount(Double moneyAccount) {
		this.moneyAccount = moneyAccount;
	}

	public String getAccountNum() {
		return accountNum;
	}

	public void setAccountNum(String accountNum) {
		this.accountNum = accountNum;
	}
	
	
}
