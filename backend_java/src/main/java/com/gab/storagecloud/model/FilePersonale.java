package com.gab.storagecloud.model;

import java.io.Serializable;
import java.util.Date;

import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import org.springframework.data.annotation.Id;
import lombok.Data;

@Document(collection = "file_personali")
@Data
public class FilePersonale implements Serializable {
	/**
	* 
	*/
	private static final long serialVersionUID = 5878530758493230325L;

	@Id
	private String id;
	@Indexed(unique = true)
	private String nome;
	private String descrizione;
	private String gridFsId; // ID di GridFS per il file salvato
	private String tipoFile;
	private long dimensione;
	private Date dataCreazione;
	private String url;
	private String usernameUtente;
}
