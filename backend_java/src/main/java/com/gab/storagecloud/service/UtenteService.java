package com.gab.storagecloud.service;

import java.util.List;
import java.util.Optional;

import com.gab.storagecloud.model.Utente;

public interface UtenteService {
	void salvaUtente(Utente utente);
	List<Utente> trovaTutti();
	Optional<Utente> trovaPerId(String id);
	Optional<Utente> trovaPerUsername(String username);
	void cancellaUtente(Utente utente);
}
