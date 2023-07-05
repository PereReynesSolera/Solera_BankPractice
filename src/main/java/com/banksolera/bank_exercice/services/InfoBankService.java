package com.banksolera.bank_exercice.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.banksolera.bank_exercice.entities.InfoBank;
//import com.banksolera.bank_exercice.entities.User;
import jakarta.validation.Valid;

@Component
public class InfoBankService {
	List<InfoBank> infoBankList = new ArrayList<>();
	
	public InfoBank createBank(@Valid InfoBank ifs) {
		infoBankList.add(ifs);
		return ifs;
	}

	public List<InfoBank> fetchBankList() {
		return infoBankList;
	}
 }