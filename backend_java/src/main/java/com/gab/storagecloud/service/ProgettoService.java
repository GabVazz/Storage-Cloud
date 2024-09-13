package com.gab.storagecloud.service;

import java.util.List;
import java.util.Optional;

import com.gab.storagecloud.model.Progetto;

public interface ProgettoService {
	void salvaProgetto(Progetto progetto);
	List<Progetto> trovaTutti();
	List<Progetto> trovaTuttiPerUsernameUtente(String usernameUtente);
	Optional<Progetto> trovaPerId(String id);
	Optional<Progetto> trovaPerIdGridFd(String gridFsId);
	Optional<Progetto> trovaPerNome(String nome);
	void cancellaProgetto(Progetto progetto);
	void cancellaPerId(String id);
}
