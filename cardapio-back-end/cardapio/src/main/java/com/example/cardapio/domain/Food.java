package com.example.cardapio.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor




public class Food {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String titulo;

    @NotBlank
    private String imagen;

    @NotNull
    private Double price;

    @Column(unique = true)
    @NotBlank
    private String codigo;

    public Food( String titulo, String imagen, Double price, String codigo) {
        this.titulo = titulo;
        this.imagen = imagen;
        this.price = price;
        this.codigo = codigo;
    }
}
