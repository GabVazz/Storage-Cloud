package com.gab.storagecloud.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gab.storagecloud.model.Progetto;
import com.gab.storagecloud.repository.ProgettoRepository;
import com.gab.storagecloud.service.ProgettoService;

@Service
public class ProgettoServiceImpl implements ProgettoService{

	@Autowired
	ProgettoRepository pr;
	
	@Override
	public void salvaProgetto(Progetto progetto) {
		pr.save(progetto);
	}

	@Override
	public List<Progetto> trovaTutti() {
		return pr.findAll();
	}

	@Override
	public Optional<Progetto> trovaPerId(String id) {
		return pr.findById(id);
	}

	@Override
	public Optional<Progetto> trovaPerNome(String nome) {
		return pr.findByNome(nome);
	}

	@Override
	public void cancellaProgetto(Progetto progetto) {
		pr.delete(progetto);
	}

	@Override
	public List<Progetto> trovaTuttiPerUsernameUtente(String usernameUtente) {
		return pr.findByUsernameUtente(usernameUtente);
	}

	@Override
	public Optional<Progetto> trovaPerIdGridFd(String gridFsId) {
		return pr.findByGridFsId(gridFsId);
	}

	@Override
	public void cancellaPerId(String id) {
		pr.deleteById(id);
	}
	

}
