import React, { useState } from 'react';
import { update } from '../service/CardapioService';
import { MensagemSucessoUpdate, mensagemErrorUpdate } from '../utils/Toastr';
import './Cadastro.css';
import LinkButton from '../layout/LinkButton.jsx';

const Update = () => {
  const initialValues = {
    codigo: "",
    imagen: "",
    price: 0,
    titulo: ""
  }

  const [cardapio, setCardapio] = useState(initialValues);
  const [loading, setLoading] = useState(true);
  const [codigo, setCodigo] = useState(""); // Adicionando o estado para armazenar o código

  function onChange(ev) {
    const { name, value } = ev.target;
    if (name === 'codigo') {
      setCodigo(value); // Atualizando o estado do código
    }
    setCardapio((prevCardapio) => ({ ...prevCardapio, [name]: value }));
  }

  function onSubmit() {
    update(codigo, cardapio)
      .then((res) => {
        MensagemSucessoUpdate();
        setTimeout(() => {
          window.location.reload(); // Isso recarrega a página
        }, 3000);
      
      })
      .catch((error) => {
        mensagemErrorUpdate();
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className='corpo'>
      <h1>Cardápio-WEB</h1>
      <div className='CadastroContainer'>
        <div>
          <label className='titleLabel'> Codigo: </label>
          <input className='inputCodigo' name='codigo' onChange={onChange}></input>
        </div>

        <div>
          <label className='titleLabel'> Titulo: </label>
          <input className='inputTitle' name='titulo' onChange={onChange}></input>
        </div>

        <div>
          <label className='titleLabel'> Link da imagem: </label>
          <input className='inputImage' name='imagen' onChange={onChange}></input>
        </div>

        <div>
          <label className='titleLabel'> Valor: </label>
          <input className='inputPrice' name='price' onChange={onChange}></input>
        </div>

        <div className='btnCards'>
          <LinkButton to="/" type="button" text="Salvar" onClick={onSubmit}></LinkButton>
          <LinkButton to="/" type="button" text="Voltar"></LinkButton>
        </div>
      </div>
    </div>
  );
}

export default Update;
