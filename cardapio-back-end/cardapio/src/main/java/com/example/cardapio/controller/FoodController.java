package com.example.cardapio.controller;

import com.example.cardapio.domain.Food;
import com.example.cardapio.domain.exceptions.ObjetoNaoEncontrado;
import com.example.cardapio.dto.FoodDTO;
import com.example.cardapio.repository.FoodRepository;
import com.example.cardapio.service.FoodService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("food")
@RequiredArgsConstructor
public class FoodController {

    private final FoodService foodService;

    @Autowired
    private FoodRepository foodRepository;



    @GetMapping("/buscarListaFood")
        public ResponseEntity getAll() {
            return ResponseEntity.ok().body(foodService.findAll());
    }

    @GetMapping("/buscarCodigo/{food}")
        public ResponseEntity <Food> findByNomeCodigo (@PathVariable("food") String codigo) {
            return ResponseEntity.ok(foodService.findByCodigo(codigo));

    }


    @PostMapping("Criar/Food")
    public ResponseEntity saveFood(@RequestBody FoodDTO foodDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(foodService.saveFood(foodDTO));
    }

    @DeleteMapping("/Remover/Food/{codigo}")
    public ResponseEntity<Food> remover(@PathVariable String codigo) {
        foodService.removerCodigo(codigo);
        return ResponseEntity.ok().build();
    }

    @PutMapping("Editar/Food")
    public ResponseEntity update(@RequestBody Food food) {
        Food foodUPD = foodService.update(food);
        return ResponseEntity.ok().body(food);
    }

    @PutMapping("/Editar/Food/{codigo}")
    public ResponseEntity<Food> updateFood(@PathVariable String codigo, @RequestBody FoodDTO foodDTO) {
        try {
            Food updatedFood = foodService.updateCodigo(codigo, foodDTO);
            return new ResponseEntity<>(updatedFood, HttpStatus.OK);
        } catch (ObjetoNaoEncontrado ex) {
            return ResponseEntity.notFound().build();
        }
    }


}
