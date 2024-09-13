package com.gab.storagecloud.service;

import java.util.List;
import java.util.Optional;

import com.gab.storagecloud.model.FilePersonale;

public interface FilePersonaleService {
	void salvaFilePersonale(FilePersonale filePersonale);
	List<FilePersonale> trovaTutti();
	List<FilePersonale> trovaTuttiPerUsernameUtente(String usernameUtente);
	Optional<FilePersonale> trovaPerId(String id);
	Optional<FilePersonale> trovaPerIdGridFd(String gridFdId);
	Optional<FilePersonale> trovaPerNome(String nome);
	void cancellaFilePersonale(FilePersonale filePersonale);
	void cancellaPerId(String id);
}
