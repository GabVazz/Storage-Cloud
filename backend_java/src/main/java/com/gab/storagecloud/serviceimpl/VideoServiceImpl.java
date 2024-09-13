package com.gab.storagecloud.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gab.storagecloud.model.Video;
import com.gab.storagecloud.repository.VideoRepository;
import com.gab.storagecloud.service.VideoService;

@Service
public class VideoServiceImpl implements VideoService {

	@Autowired
	VideoRepository vr;

	@Override
	public void salvaVideo(Video video) {
		vr.save(video);
	}

	@Override
	public List<Video> trovaTutti() {
		return vr.findAll();
	}

	@Override
	public Optional<Video> trovaPerId(String id) {
		return vr.findById(id);
	}

	@Override
	public Optional<Video> trovaPerNome(String nome) {
		return vr.findByNome(nome);
	}

	@Override
	public void cancellaVideo(Video video) {
		vr.delete(video);
	}

	@Override
	public List<Video> trovaTuttiPerUsernameUtente(String usernameUtente) {
		return vr.findByUsernameUtente(usernameUtente);
	}

	@Override
	public Optional<Video> trovaPerGridFsId(String gridFsId) {
		return vr.findByGridFsId(gridFsId);
	}

	@Override
	public void cancellaPerGridFdId(String gridFsId) {
		vr.deleteByGridFsId(gridFsId);
	}

	@Override
	public void cancellaPerId(String id) {
		vr.deleteById(id);
		
	}
}
