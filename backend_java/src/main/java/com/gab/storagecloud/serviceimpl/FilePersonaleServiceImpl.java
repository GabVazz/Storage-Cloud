package com.gab.storagecloud.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gab.storagecloud.model.FilePersonale;
import com.gab.storagecloud.repository.FilePersonaleRepository;
import com.gab.storagecloud.service.FilePersonaleService;

@Service
public class FilePersonaleServiceImpl implements FilePersonaleService{

	@Autowired
	FilePersonaleRepository fileRepo;
	
	@Override
	public void salvaFilePersonale(FilePersonale filePersonale) {
		fileRepo.save(filePersonale);
	}

	@Override
	public List<FilePersonale> trovaTutti() {
		return fileRepo.findAll();
	}

	@Override
	public Optional<FilePersonale> trovaPerId(String id) {
		return fileRepo.findById(id);
	}

	@Override
	public Optional<FilePersonale> trovaPerNome(String nome) {
		return fileRepo.findByNome(nome);
	}

	@Override
	public void cancellaFilePersonale(FilePersonale filePersonale) {
		fileRepo.delete(filePersonale);
	}

	@Override
	public List<FilePersonale> trovaTuttiPerUsernameUtente(String usernameUtente) {
		return fileRepo.findByUsernameUtente(usernameUtente);
	}

	@Override
	public Optional<FilePersonale> trovaPerIdGridFd(String gridFdId) {
		return fileRepo.findById(gridFdId);
	}

	@Override
	public void cancellaPerId(String id) {
		fileRepo.deleteById(id);
	}

}
