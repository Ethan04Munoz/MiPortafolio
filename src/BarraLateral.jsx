import './LetraE.css';
import './BarraLateral.css';
import Proyectos from './Proyectos';
function BarraLateral(){
    return (
        <div className="BarraLateral">
            <div class="letraE3D">E</div>
            <h1>Ethan Muñoz - Desarrollador Web</h1>
            <a href="/#/proyectos">
                <div>
                Proyectos
                </div>
            </a>
            <a href="/#/tecnologias">
                <div>
                Tecnologías
                </div>
            </a>
            <a href="/#/sobremi">
                <div>
                Sobre mí
                </div>
            </a>
        </div>
    )
}

export default BarraLateral;