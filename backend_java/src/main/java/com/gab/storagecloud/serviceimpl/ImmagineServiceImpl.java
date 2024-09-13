package com.gab.storagecloud.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gab.storagecloud.model.Immagine;
import com.gab.storagecloud.repository.ImmagineRepository;
import com.gab.storagecloud.service.ImmagineService;

@Service
public class ImmagineServiceImpl implements ImmagineService {

	@Autowired
	ImmagineRepository ir;

	@Override
	public void salvaImmagine(Immagine immagine) {
		ir.save(immagine);
	}

	@Override
	public List<Immagine> trovaTutti() {
		return ir.findAll();
	}

	@Override
	public Optional<Immagine> trovaPerId(String id) {
		return ir.findById(id);
	}

	@Override
	public Optional<Immagine> trovaPerNome(String nome) {
		return ir.findByNome(nome);
	}

	@Override
	public void cancellaImmagine(Immagine immagine) {
		ir.delete(immagine);
	}

	@Override
	public List<Immagine> trovaTuttiPerUsernameUtente(String usernameUtente) {
		return ir.findByUsernameUtente(usernameUtente);
	}

	@Override
	public Optional<Immagine> trovaPerIdGridFd(String gridFsId) {
		return ir.findByGridFsId(gridFsId);
	}

	@Override
	public void cancellaPerId(String id) {
		ir.deleteById(id);

	}
	
	@Override
	public void cancellaPerGridFsId(String gridFsId) {
		ir.findByGridFsId(gridFsId);

	}

}
