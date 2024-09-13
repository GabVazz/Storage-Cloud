package com.gab.storagecloud.model;

import java.io.Serializable;
import java.util.Date;

import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import org.springframework.data.annotation.Id;
import lombok.Data;

@Document(collection = "video")
@Data
public class Video implements Serializable {

	private static final long serialVersionUID = -6952717562887362384L;

	@Id
	private String id;
	@Indexed(unique = true)
	private String nome;
	private String descrizione;
	private String gridFsId;
	private String tipoMime;
	private long dimensione;
	private Date dataCreazione;
	private String usernameUtente;
}
