import './App.css';
import BarraInferior from './componentes/BarraInferior';
import BarraLateral from './componentes/BarraLateral';
import Flipcard from './componentes/Flipcard';

function Tecnologias() {
    return (
        <div className='grid-BarraCuerpo'>
            <BarraLateral/>
            <div>
            <h1>Frontend</h1>
            <div className="grid-container">
                <Flipcard 
                    imgUrl="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067"
                    id="tecnologiasFlipcardHtml"
                    cardLinkRoute="https://facebook.com"
                    cardLinkText="Visitar"
                />
                {/*<Flipcard 
                    imgUrl="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067"
                    cardTitle="CSS"
                    cardContent="Utilice CSS para dar estilos y realizar animaciones en los proyectos de "
                    cardLinkRoute="https://facebook.com"
                    cardLinkText="Visitar"
                />
                <Flipcard 
                    imgUrl="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067"
                    cardTitle="React"
                    cardContent="Utilice Javascript vanilla y herramientas propias del mismo como LocalStorage en "
                    cardLinkRoute="https://facebook.com"
                    cardLinkText="Visitar"
                />
                <Flipcard 
                    imgUrl="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067"
                    cardTitle="React"
                    cardContent="Utilice React para los proyectos de "
                    cardLinkRoute="https://facebook.com"
                    cardLinkText="Visitar"
    />*/}
            </div>
            <h1>Backend</h1>
            <div className="grid-container">
                {/*<Flipcard 
                    imgUrl="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067"
                    cardTitle="Node JS"
                    cardContent="Utilicé HTML en todos los proyectos que involucran React. "
                    cardLinkRoute="https://facebook.com"
                    cardLinkText="Visitar"
                />
                <Flipcard 
                    imgUrl="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067"
                    cardTitle="Express.js"
                    cardContent="Utilicé HTML en todos los proyectos que involucran React. "
                    cardLinkRoute="https://facebook.com"
                    cardLinkText="Visitar"
                />
                <Flipcard 
                    imgUrl="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067"
                    cardTitle="MySQL"
                    cardContent="Utilicé HTML en todos los proyectos que involucran React. "
                    cardLinkRoute="https://facebook.com"
                    cardLinkText="Visitar"
                />
                <Flipcard 
                    imgUrl="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067"
                    cardTitle="Stripe"
                    cardContent="Utilicé HTML en todos los proyectos que involucran React. "
                    cardLinkRoute="https://facebook.com"
                    cardLinkText="Visitar"
                />
                <Flipcard 
                    imgUrl="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067"
                    cardTitle="APIs"
                    cardContent="Utilicé HTML en todos los proyectos que involucran React. "
                    cardLinkRoute="https://facebook.com"
                    cardLinkText="Visitar"
/>*/}
                </div>
            </div>
            <BarraInferior/>
        </div>
    )
}

export default Tecnologias