import axios from 'axios'
import React from 'react'

const baseUrl = 'http://localhost:8080/'

export const salveCardapio = async (cardapio) => {
  return await axios.post(baseUrl + "/food/Criar/Food", cardapio, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}


// Altere a função getAllCardapio em CardapioService.jsx para:
export const getAllCardapio = async () => {
  return await axios.get(baseUrl + "/food/buscarListaFood", {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export const remover = async (codigo) => {
  return await axios.delete(baseUrl + `/food/Remover/Food/${codigo}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export const update = async (codigo, cardapio) => {

  return await axios.put(`${baseUrl}/food/Editar/Food/${codigo}`, cardapio, {
    headers: {
      'Content-Type': 'application/json'
    }

  })
}

export const buscarCodigo = async (codigo) => {
  return await axios.get(`${baseUrl}/food/buscarCodigo/${codigo}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

}








