package com.gab.storagecloud.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.gab.storagecloud.model.Utente;
import java.util.Optional;


public interface UtenteRepository extends MongoRepository<Utente, String>{
	@Query("{ 'username': ?0 }")
	Optional<Utente> findByUsername(String username);
}
