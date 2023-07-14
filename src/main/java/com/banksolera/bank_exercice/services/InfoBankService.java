package com.banksolera.bank_exercice.services;
import java.util.List;
import java.util.Optional;

import com.banksolera.bank_exercice.entities.User;
import com.banksolera.bank_exercice.repository.InterBankAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.banksolera.bank_exercice.entities.BankAccount;
//import com.banksolera.bank_exercice.entities.User;


@Component
public class InfoBankService extends CommonService<BankAccount, InterBankAccountRepository>{
	@Autowired
	private InterBankAccountRepository bankAccountRepository;
	public ResponseEntity<?> createBankAccount(BankAccount bk) {

		Optional<BankAccount> bankAccountOptional = bankAccountRepository.findAccountByAccountNum(bk.getAccountNum());
		if (bankAccountOptional.isPresent()){
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: This bank account is already in use");
		} else{
			repository.save(bk);
			return ResponseEntity.ok("Ok");
		}
	}

	public List<BankAccount> findAllByUser(User user) {
		return repository.findAllByUser(user);
	}

	public void delete(BankAccount bankAccount) {
		repository.delete(bankAccount);
	}
}