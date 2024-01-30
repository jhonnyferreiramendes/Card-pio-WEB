package com.example.cardapio.Exception;


import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Builder
@Data
public class PadraoException {

    private LocalDate timetamp;
    private Integer status;
    private String erro;
    private String mensage;
    private String path;

}
