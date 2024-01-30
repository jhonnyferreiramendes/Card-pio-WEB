import React, { useState } from 'react';
import LinkButton from '../layout/LinkButton';
import { buscarCodigo } from '../service/CardapioService';
import { mensagemGetErro } from '../utils/Toastr';
import Card from '../card/Card';
import './ModalGet.css';

const ModalGet = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(true);
  const [codigo, setCodigo] = useState('');
  const [data, setData] = useState(null);

  const Close = () => {
    onClose();
  };

  function onSubmit() {
    buscarCodigo(codigo)
      .then((result) => {
        setData(result.data);
        if (result.data.status === 204) {
          mensagemGetErro()
        }
      })
      .catch(() => {
        mensagemGetErro()
      })
      .finally(() => {
        console.log(data)
        setLoading(false);
      });
  }

  return (
    <div>
      <h1>Cardápio-WEB</h1>
      <div className="openModal">
        <h2>Buscar</h2>
        <div className="modalCodigo">
          <label className='titleLabel'> Codigo: </label>
          <input
            className='inputCodigo'
            name='codigo'
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />

          <div className='btnGet'>
            <LinkButton type="button" onClick={onSubmit} text="Buscar" />
            <LinkButton to="/" type="button" text="Voltar" />
          </div>
        </div>

        <div className='containerCard'>
          {data && (
            <div className="resultContainer">
              <h2>Resultado da busca:</h2>
              {data.codigo ? (
                <Card
                  titulo={data.titulo}
                  imagen={data.imagen}
                  price={data.price}
                  codigo={data.codigo}
                />
              ) : (<p className='codigoNot'>Código não encontrado.</p>)}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default ModalGet;
