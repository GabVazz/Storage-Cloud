package com.gab.storagecloud.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.gab.storagecloud.model.MessaggioTesto;

@Repository("MessaggioTesto")
public interface MessaggioTestoRepository extends MongoRepository<MessaggioTesto, String>{
	@Query("{ 'nome': ?0 }")
	Optional<MessaggioTesto> findByNome(String nome);
	
	List<MessaggioTesto> findByUsernameUtente(String usernameUtente);
}
