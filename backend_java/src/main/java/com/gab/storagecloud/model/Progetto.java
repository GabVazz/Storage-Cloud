package com.gab.storagecloud.model;

import java.io.Serializable;
import java.util.Date;

import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
import lombok.Data;

@Document(collection = "progetti")
@Data
public class Progetto implements Serializable {
    private static final long serialVersionUID = -5228429462315499620L;

    @Id
    private String id;
    
    @Indexed(unique = true)
    private String nome;
    
    private String descrizione;
    
    private String gridFsId; // ID di GridFS per i dati ZIP
    
    private long dimensione;
    
    private Date dataCreazione;
    
    private String usernameUtente;
}
