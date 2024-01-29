import { useState } from 'react'
import {HashRouter,Routes,Route} from "react-router-dom";
import Proyectos from './Proyectos';
import Tecnologias from './Tecnologías';
import SobreMi from './Sobre mi';
import Curriculum from './Curriculum';

function App() {
  return (
    <>
      <HashRouter>
      <Routes>
        <Route path="/proyectos" element={<Proyectos/>}/>
        <Route path='/tecnologias' element={<Tecnologias/>}/>
        <Route path="/sobremi" element={<SobreMi/>}/>
        <Route path="/curriculum" element={<Curriculum/>}/>
        <Route path='/' element={<SobreMi/>}/>
      </Routes>
      </HashRouter>
    </>
  )
}

export default App
