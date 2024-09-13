package com.gab.storagecloud.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.gab.storagecloud.model.Immagine;

@Repository("ImmagineRepository")
public interface ImmagineRepository extends MongoRepository<Immagine, String> {
	@Query("{ 'nome': ?0 }")
	Optional<Immagine> findByNome(String nome);

	List<Immagine> findByUsernameUtente(String usernameUtente);

	Optional<Immagine> findByGridFsId(String gridFsId);

	void deleteByGridFsId(String gridFsId);

}
