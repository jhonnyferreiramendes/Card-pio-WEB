package com.example.cardapio.service;


import com.example.cardapio.domain.exceptions.ObjetoNaoEncontrado;
import com.example.cardapio.dto.FoodDTO;
import com.example.cardapio.domain.Food;
import com.example.cardapio.repository.FoodRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.swing.*;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FoodService {

    private final FoodRepository foodRepository;

    public List<Food> findAll() {
        return foodRepository.findAll();
    }

    public Food findByCodigo(String codigo){
        return foodRepository.findByCodigo(codigo).orElseThrow(() -> new ObjetoNaoEncontrado
                (" " + codigo + " Não encontrado"));
    }
    public Food saveFood(FoodDTO foodDTO) {
        var food = new Food(
                foodDTO.getTitulo(),
                foodDTO.getImagen(),
                foodDTO.getPrice(),
                foodDTO.getCodigo());
        var foodSalvo = foodRepository.save(food);
        return foodSalvo;
    }



// ...

    public void removerCodigo(String codigo) {
        Optional<Food> foodOptional = foodRepository.findByCodigo(codigo);

        if (foodOptional.isPresent()) {
            Food food = foodOptional.get();
            foodRepository.delete(food);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Food not found with codigo: " + codigo);
        }
    }


    public Food update(Food food) {
        return foodRepository.save(food);
    }

    public Food updateCodigo(String codigo, FoodDTO foodDTO) {
        Optional<Food> existingFoodOptional = foodRepository.findByCodigo(codigo);

        if (existingFoodOptional.isPresent()) {
            Food existingFood = existingFoodOptional.get();
            existingFood.setTitulo(foodDTO.getTitulo());
            existingFood.setImagen(foodDTO.getImagen());
            existingFood.setPrice(foodDTO.getPrice());

            return foodRepository.save(existingFood);
        } else {
            throw new ObjetoNaoEncontrado("Food not found with codigo: " + codigo);
        }
    }

}





