import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import{BrowserRouter, Routes, Link, Route} from 'react-router-dom';
import './index.css'
import Cadastro from './components/page/Cadastro.jsx';
import ModalDelete from './components/page/ModalDelete.jsx';
import  Update from './components/page/Update.jsx';
import ModalGet from './components/page/ModalGet.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
     <Routes>

      <Route path ="/" element={<App/>} />
      <Route path = "/cadastro" element={<Cadastro/>}/>
      <Route path ='/modaldelete' element={<ModalDelete/>}/>
      <Route path = '/update' element={<Update/>}/>
      <Route path = '/buscar' element={<ModalGet/>}/>

    </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
