package com.gab.storagecloud.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gab.storagecloud.model.MessaggioTesto;
import com.gab.storagecloud.repository.MessaggioTestoRepository;
import com.gab.storagecloud.service.MessaggioTestoService;

@Service
public class MessaggioTestoServiceImpl implements MessaggioTestoService{

	@Autowired
	MessaggioTestoRepository messaggioRepo;
	
	@Override
	public void salvaMessaggio(MessaggioTesto messaggio) {
		messaggioRepo.save(messaggio);
	}

	@Override
	public List<MessaggioTesto> trovaTutti() {
		return messaggioRepo.findAll();
	}

	@Override
	public Optional<MessaggioTesto> trovaPerId(String id) {
		return messaggioRepo.findById(id);
	}

	@Override
	public Optional<MessaggioTesto> trovaPerNome(String nome) {
		return messaggioRepo.findByNome(nome);
	}

	@Override
	public void cancellaMessaggio(MessaggioTesto messaggio) {
		messaggioRepo.delete(messaggio);
	}

	@Override
	public List<MessaggioTesto> trovaTuttiPerUsernameUtente(String usernameUtente) {
		return messaggioRepo.findByUsernameUtente(usernameUtente);
	}

	@Override
	public void cancellaMessaggioPerId(String id) {
		messaggioRepo.deleteById(id);
	}
}
