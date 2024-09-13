package com.gab.storagecloud.service;

import java.util.List;
import java.util.Optional;

import com.gab.storagecloud.model.MessaggioTesto;

public interface MessaggioTestoService {
	void salvaMessaggio(MessaggioTesto messaggio);
	List<MessaggioTesto> trovaTutti();
	List<MessaggioTesto> trovaTuttiPerUsernameUtente(String usernameUtente);
	Optional<MessaggioTesto> trovaPerId(String id);
	Optional<MessaggioTesto> trovaPerNome(String nome);
	void cancellaMessaggioPerId(String id);
	void cancellaMessaggio(MessaggioTesto messaggio);
}
