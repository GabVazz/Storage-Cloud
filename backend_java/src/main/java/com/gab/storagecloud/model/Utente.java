package com.gab.storagecloud.model;

import java.io.Serializable;

import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import org.springframework.data.annotation.Id;
import lombok.Data;

@Document(collection = "utenti")
@Data
public class Utente implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 6175343514071070793L;
	
	@Id
	private String id;
	@Indexed(unique = true)
	private String username;
	private String password;
	private String nome;
	private String email;
}
