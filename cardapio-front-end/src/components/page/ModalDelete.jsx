import React from 'react';
import LinkButton from '../layout/LinkButton';
import { mensagemSucessoDelete, mensagemErrorDelete } from '../utils/Toastr';
import { remover } from '../service/CardapioService';
import { useState } from 'react';

const ModalDelete = ({ isOpen, onClose }) => {

  const [codigo, setCodigo] = useState();
  const [loading, setLoading] = useState(true);

  const Close = () => {
    onClose();
  };

  function onSubmit() {
    remover(codigo)
      .then((res) => {
          mensagemSucessoDelete()
      })
      .catch((error) => {
        mensagemErrorDelete();
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (

    /* <div className={isOpen ? 'container' : "openModalNot"}> */

    <div className="openModal">
      <h2>REMOVER</h2>
      <div className="modalCodigo">
        <label className='titleLabel'> Codigo: </label>
        <input
          className='inputCodigo'
          name='codigo'
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}>
        </input>
      </div>

      <div className="modal-footer">
        <LinkButton type="button" onClick={onSubmit} text="Remover" />
        <LinkButton type="button" onClick={Close} text="Fechar" />
      </div>
    </div>
  );
}

export default ModalDelete;
