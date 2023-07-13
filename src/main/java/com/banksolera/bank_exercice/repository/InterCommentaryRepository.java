package com.banksolera.bank_exercice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.banksolera.bank_exercice.entities.Commentary;

@Repository
public interface InterCommentaryRepository extends JpaRepository<Commentary, Long> {

}
