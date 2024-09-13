package com.gab.storagecloud.service;

import java.util.List;
import java.util.Optional;

import com.gab.storagecloud.model.Video;

public interface VideoService {
	void salvaVideo(Video video);

	List<Video> trovaTutti();

	List<Video> trovaTuttiPerUsernameUtente(String usernameUtente);

	Optional<Video> trovaPerId(String id);

	Optional<Video> trovaPerNome(String nome);

	Optional<Video> trovaPerGridFsId(String gridFsId);

	void cancellaVideo(Video video);
	
	void cancellaPerId(String id);

	void cancellaPerGridFdId(String gridFsId);
}
