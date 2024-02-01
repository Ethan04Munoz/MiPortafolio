import './App.css';
import BarraInferior from './componentes/BarraInferior';
import BarraLateral from './componentes/BarraLateral';
import Flipcard from './componentes/Flipcard';

function Curriculum() {
    return (
        <div className='grid-BarraCuerpo'>
            <BarraLateral/>
            <div>

            </div>
            <BarraInferior/>
        </div>
    )
}

export default Curriculum;