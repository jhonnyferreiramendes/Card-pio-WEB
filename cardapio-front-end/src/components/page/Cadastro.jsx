import React, { useState } from 'react';
import { salveCardapio } from '../service/CardapioService';
import { mensagemSucesso, mensagemError } from '../utils/Toastr';
import './Cadastro.css'
import LinkButton from '../layout/LinkButton.jsx';


const ModalPost = () => {
  const initialValues = {
    codigo: "",
    imagen: "",
    price: 0,
    titulo: ""
  }

  const [cardapio, setCardapio] = useState(initialValues);
  const [loading, setLoading] = useState(true);


  function onChange(ev) {
    const { name, value } = ev.target;
    setCardapio((prevCardapio) => ({ ...prevCardapio, [name]: value }));
  }

  function onSubmit() {
    salveCardapio(cardapio)
      .then((res) => {
        mensagemSucesso();
        setTimeout(() => {
          window.location.reload(); // Isso recarrega a página
        }, 3000);
      })
      .catch((error) => {
        mensagemError();
      })
      .finally(() => {
        setLoading(false);
      });
  }


  return (
    <div className='corpo'>
      <h1>Cardápio-WEB</h1>
      <div className='CadastroContainer' >
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

        <div>
          <label className='titleLabel'> Codigo: </label>
          <input className='inputCodigo' name='codigo' onChange={onChange}></input>
        </div>

        <div className='btnCards'>
          <LinkButton to="/" type="button" text="Salvar" onClick={onSubmit}></LinkButton>
          <LinkButton to="/" type="button" text="Fechar"></LinkButton>
        </div>

      </div>
    </div>
  );
}


export default ModalPost
