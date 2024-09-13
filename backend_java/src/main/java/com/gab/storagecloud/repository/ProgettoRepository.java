package com.gab.storagecloud.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.gab.storagecloud.model.Progetto;


@Repository("ProgettoRepository")
public interface ProgettoRepository extends MongoRepository<Progetto, String>{
	@Query("{ 'nome': ?0 }")
	Optional<Progetto> findByNome(String nome);
	
	List<Progetto> findByUsernameUtente(String usernameUtente);
	Optional<Progetto> findByGridFsId(String gridFsId);
}
