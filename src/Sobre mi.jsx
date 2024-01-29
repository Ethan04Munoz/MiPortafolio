import './App.css'
import BarraLateral from './componentes/BarraLateral';
import Flipcard from './componentes/Flipcard';

function SobreMi() {
    return (
        <div className='grid-BarraCuerpo'>
            <BarraLateral/>
            <div>
                <h1>Desarrollador web, fanatico del buscaminas.</h1>
                <div class="icon-bar">
                    <a href="https://github.com/tu-usuario" target="_blank" class="icon-link">
                        <img src="../src/img/github-Dark.svg" alt="GitHub" />
                    </a>
                    <a href="path-to-your-cv.pdf" target="_blank" class="icon-link">
                        <img src="../src/img/cv-Dark.svg" alt="CV" />
                    </a>
                    <a href="https://www.linkedin.com/in/tu-usuario" target="_blank" class="icon-link">
                        <img src="../src/img/linkedin-Dark.svg" alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SobreMi;

