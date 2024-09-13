package com.gab.storagecloud.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.gab.storagecloud.model.Video;

@Repository("VideoRepository")
public interface VideoRepository extends MongoRepository<Video, String> {
	@Query("{ 'nome': ?0 }")
	Optional<Video> findByNome(String nome);

	List<Video> findByUsernameUtente(String usernameUtente);

	Optional<Video> findByGridFsId(String gridFsId);

	void deleteByGridFsId(String gridFsId);

}
