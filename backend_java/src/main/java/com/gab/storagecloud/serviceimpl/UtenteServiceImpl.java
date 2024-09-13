package com.gab.storagecloud.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gab.storagecloud.model.Utente;
import com.gab.storagecloud.repository.UtenteRepository;
import com.gab.storagecloud.service.UtenteService;

@Service
public class UtenteServiceImpl implements UtenteService {
	@Autowired
	UtenteRepository up;

	@Override
	public void salvaUtente(Utente utente) {
		up.save(utente);
	}

	@Override
	public List<Utente> trovaTutti() {
		return up.findAll();
	}

	@Override
	public Optional<Utente> trovaPerId(String id) {
		return up.findById(id);
	}

	@Override
	public void cancellaUtente(Utente utente) {
		up.delete(utente);

	}

	@Override
	public Optional<Utente> trovaPerUsername(String username) {
		return up.findByUsername(username);
	}

}
