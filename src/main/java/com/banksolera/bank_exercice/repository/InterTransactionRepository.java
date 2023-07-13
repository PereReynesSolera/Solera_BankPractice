package com.banksolera.bank_exercice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.banksolera.bank_exercice.entities.Transaction;

@Repository
public interface InterTransactionRepository extends JpaRepository<Transaction, Long> {

}
