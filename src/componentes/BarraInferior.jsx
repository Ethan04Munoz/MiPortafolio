import './BarraInferior.css';
import { useState } from 'react';

let espanolImg = '../src/img/español-Rounded.png';
let inglesImg = '../src/img/ingles-Rounded.svg';
function BarraInferior(){
    // Inicializar el estado con una de las imágenes
    const [imagenActual, setImagenActual] = useState(espanolImg);
    const [claseImagenIdioma, setClaseImagenIdioma] = useState('barraInferiorImg4Vespañol')

    // Función para cambiar la imagen
    const cambiarIdioma = () => {
        setImagenActual(imagenActual === espanolImg ? inglesImg : espanolImg);
        setClaseImagenIdioma(claseImagenIdioma === 'barraInferiorImg4Vespañol' ? 'barraInferiorImg4Vingles' : 'barraInferiorImg4Vespañol');
    };
    return (
        <div className="BarraInferior">
            <div>
                <a href="https://github.com/tu-usuario" target="_blank" class="icon-link">
                    <img src="../src/img/github-Dark.svg" alt="GitHub" className='barraInferiorImg1'/>
                </a>
            </div>
            <div>
                <a href="path-to-your-cv.pdf" target="_blank" class="icon-link">
                    <img src="../src/img/cv-Dark.svg" alt="CV"  className='barraInferiorImg2'/>
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/tu-usuario" target="_blank" class="icon-link">
                    <img src="../src/img/linkedin-Dark.svg" alt="LinkedIn"  className='barraInferiorImg3'/>
                </a>
            </div>
            <div>
                <a class="icon-link" onClick={cambiarIdioma}>
                    <img src={imagenActual} alt="Idioma" className={claseImagenIdioma}/>
                </a>
            </div>
        </div>
    )
}

export default BarraInferior;