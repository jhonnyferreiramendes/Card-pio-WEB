package com.example.cardapio.repository;

import com.example.cardapio.domain.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface FoodRepository extends JpaRepository<Food, Long> {

    List<Food> findAll();

    Optional<Food> findByCodigo(String codigo);
    Food findBy();
}
