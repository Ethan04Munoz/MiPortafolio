import { useState } from 'react'
import {HashRouter,Routes,Route} from "react-router-dom";
import Proyectos from './Proyectos';

function App() {
  return (
    <>
      <HashRouter>
      <Routes>
        <Route exact path="/proyectos" element={<Proyectos/>}/>
        <Route exact path="/" element={<Proyectos/>}/>
      </Routes>
      </HashRouter>
    </>
  )
}

export default App
