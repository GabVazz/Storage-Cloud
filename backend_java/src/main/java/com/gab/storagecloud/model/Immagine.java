package com.gab.storagecloud.model;

import java.io.Serializable;
import java.util.Date;

import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
import lombok.Data;

@Document(collection = "immagini")
@Data
public class Immagine implements Serializable {
    private static final long serialVersionUID = -6952717562887362384L;

    @Id
    private String id;
    
    @Indexed(unique = true)
    private String nome;
    
    private String descrizione;
    
    private String gridFsId;  // ID di GridFS per i dati binari dell'immagine
    
    private String tipoMime;  // Tipo MIME come stringa singola
    
    private long dimensione;  // Dimensione in byte
    
    private Date dataCreazione;
    
    private String usernameUtente;
}
