package com.banksolera.bank_exercice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.banksolera.bank_exercice.entities.User;

import java.util.Optional;

@Repository
public interface InterUserRepository extends JpaRepository<User, Long>{
    Optional<User> findUserByUserName(String userName);
}
