package com.banksolera.bank_exercice.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.banksolera.bank_exercice.entities.BankAccount;
//import com.banksolera.bank_exercice.entities.User;
import jakarta.validation.Valid;

@Component
public class InfoBankService {
	List<BankAccount> infoBankList = new ArrayList<>();
	
	public BankAccount createBank(@Valid BankAccount ifs) {
		infoBankList.add(ifs);
		return ifs;
	}

	public List<BankAccount> fetchBankList() {
		return infoBankList;
	}
 }