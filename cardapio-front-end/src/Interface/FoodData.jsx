import React, { useState, useEffect } from 'react';
import { getAllCardapio } from '../components/service/CardapioService.jsx';
import Card from '../components/card/Card';
import LinkButton from '../components/layout/LinkButton.jsx';
import ModalDelete from '../components/page/ModalDelete.jsx';
import '../components/page/ModalDelete.css';

const FoodData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getAllCardapio()
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar todos os cardápios:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const openModal = () => {
    console.log('Abrindo o modal')
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1>Cardápio-WEB</h1>
      <div className={modalOpen ? 'bodyContainerNot' : 'bodyContainer'}>
        {loading ? (
          <p>Carregando dados...</p>
        ) : (
          <div className={`container`}>
            {data.map((foodData) => (
              <Card
                key={foodData.id}
                titulo={foodData.titulo}
                imagen={foodData.imagen}
                price={foodData.price}
                codigo={foodData.codigo}
              />
            ))}
          </div>
        )}

        <div className='btnCards'>

          <div className='btnAdd'>
            <LinkButton to="/cadastro" text="Adicionar" />
          </div>

          <div>
            <LinkButton text="Remover" onClick={openModal} />
          </div>

          <div>
            <LinkButton to="/update" text="Editar" onClick={openModal} />
          </div>

          <div>
            <LinkButton to="/buscar" text="Buscar" onClick={openModal} />
          </div>

        </div>


      </div>

      {modalOpen && <ModalDelete />}

    </div>
  );
};

export default FoodData;
