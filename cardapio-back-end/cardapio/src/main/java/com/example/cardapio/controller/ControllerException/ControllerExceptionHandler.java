package com.example.cardapio.controller.ControllerException;

import com.example.cardapio.Exception.PadraoException;
import com.example.cardapio.domain.exceptions.ObjetoNaoEncontrado;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import java.time.LocalDate;

@ControllerAdvice
public class ControllerExceptionHandler {

    @ExceptionHandler(ObjetoNaoEncontrado.class)
    public ResponseEntity<PadraoException> objetoNaoEncontroExceeption(
            ObjetoNaoEncontrado ex, HttpServletRequest request) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(PadraoException.builder()
                        .erro("Objeto nao encontrado!")
                        .mensage(ex.getMessage())
                        .path(request.getRequestURI())
                        .status(HttpStatus.NO_CONTENT.value())
                        .timetamp(LocalDate.now())
                        .build());


    }


}
