package com.gab.storagecloud.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.gab.storagecloud.model.FilePersonale;
import java.util.List;


public interface FilePersonaleRepository extends MongoRepository<FilePersonale, String> {
	@Query("{ 'nome': ?0 }")
	Optional<FilePersonale> findByNome(String nome);
	
	List<FilePersonale> findByUsernameUtente(String usernameUtente);
}
