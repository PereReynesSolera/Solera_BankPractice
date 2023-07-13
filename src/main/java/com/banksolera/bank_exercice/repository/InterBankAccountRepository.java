package com.banksolera.bank_exercice.repository;

import com.banksolera.bank_exercice.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.banksolera.bank_exercice.entities.BankAccount;

import java.util.List;
import java.util.Optional;

@Repository
public interface InterBankAccountRepository extends JpaRepository<BankAccount, Long>{
    Optional<BankAccount> findAccountByAccountNum(String numAccount);

    List<BankAccount> findAllByUser(User user);
}
