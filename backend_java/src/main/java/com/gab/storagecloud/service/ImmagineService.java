package com.gab.storagecloud.service;

import java.util.List;
import java.util.Optional;

import com.gab.storagecloud.model.Immagine;

public interface ImmagineService {
	void salvaImmagine(Immagine immagine);

	List<Immagine> trovaTutti();

	List<Immagine> trovaTuttiPerUsernameUtente(String usernameUtente);

	Optional<Immagine> trovaPerId(String id);

	Optional<Immagine> trovaPerNome(String nome);

	Optional<Immagine> trovaPerIdGridFd(String gridFsId);

	void cancellaImmagine(Immagine immagine);
	
	void cancellaPerId(String id);

	void cancellaPerGridFsId(String gridFsId);
}
