import './App.css'
import Flipcard from './componentes/Flipcard'

function Proyectos() {
  return (
    <>
    <div className="grid-container">
    <Flipcard 
        imgUrl="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067"
        cardTitle="Gato"
        cardContent="Gato insano que hace wasa"
        cardLinkRoute="https://facebook.com"
        cardLinkText="Ver gato"
      />
            <Flipcard 
        imgUrl="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067"
        cardTitle="Gato"
        cardContent="Gato insano que hace wasa"
        cardLinkRoute="https://facebook.com"
        cardLinkText="Ver gato"
      /> 
    </div>

    </>
  )
}

export default Proyectos;