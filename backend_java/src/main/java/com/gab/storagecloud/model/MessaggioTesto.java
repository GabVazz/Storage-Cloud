package com.gab.storagecloud.model;

import java.io.Serializable;
import java.util.Date;

import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import org.springframework.data.annotation.Id;
import lombok.Data;

@Document(collection = "messaggi_testo")
@Data
public class MessaggioTesto implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 7092021447400955727L;

	@Id
	private String id;
	@Indexed(unique = true)
	private String nome;
	private String descrizione;
	private String url;
	private Date dataCreazione;
	private String usernameUtente;
}
