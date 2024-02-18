import './App.css'
import BarraInferior from './componentes/BarraInferior';
import BarraLateral from './componentes/BarraLateral';
import Flipcard from './componentes/Flipcard';

function Proyectos() {
  return (
    <div className='grid-BarraCuerpo'>
        <BarraLateral/>
        <div className="grid-container">
            <Flipcard 
                imgUrl="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067"
                cardTitle="Buscaminas"
                cardContent="Utilizando React, CSS3 y LocalStorage,
                    desarrollé un sitio web con búscaminas, incluyendo un búscaminas fácil,
                    medio, díficil, y un buscaminas de tamaño personalizable."
                cardLinkRoute="https://facebook.com"
                cardLinkText="Visitar"
            />
            <Flipcard 
                imgUrl="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067"
                cardTitle="Watchlist"
                cardContent="Utilizando React, CSS3 y LocalStorage, 
                    desarrollé un CRUD para permitir a los usuarios añadir películas que tienen pendientes por ver."
                cardLinkRoute="https://facebook.com"
                cardLinkText="Visitar"
            /> 
            {/*<Flipcard 
                imgUrl="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067"
                cardTitle="Password Generator"
                cardContent="Utilizando React y CSS3,
                    desarrollé una página web que genera contraseñas aleatorias, siguiendo los lineamientos que tú decidas, 
                    como solo usar letras, usar numeros y simbolos, o eligiendo la cantidad de carácteres."
                cardLinkRoute="https://facebook.com"
                cardLinkText="Visitar"
            /> 
            <Flipcard 
                imgUrl="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067"
                cardTitle="Juego de Doodle Jump"
                cardContent="Utilizando React, CSS3 y LocalStorage,
                    desarrollé un juego de Doodle Jump, que almacena en la memoria local del navegador tu máxima puntuación."
                cardLinkRoute="https://facebook.com"
                cardLinkText="Visitar"
            /> 
            <Flipcard 
                imgUrl="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067"
                cardTitle="Juego de Snake"
                cardContent="Utilizando React, CSS3 y LocalStorage,
                    desarrollé un juego de Snake, que le permite al usuario elegir entre varias formas de juego, 
                    cómo la aparición de bloques, la serpiente chedar, personalizar la velocidad, entre otras! :D"
                cardLinkRoute="https://facebook.com"
                cardLinkText="Visitar"
            /> 
            <Flipcard 
                imgUrl="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067"
                cardTitle="Quiz de Cine"
                cardContent="Utilizando la API de TMDB, React, CSS3 y LocalStorage
                    desarrollé un juego de Quiz de cine donde los usuarios puedan poner a prueba sus conocimientos sobre películas, 
                    actores, directores, etc. Utilizo la API para generar preguntas y respuestas."
                cardLinkRoute="https://facebook.com"
                cardLinkText="Visitar"
            /> 
            <Flipcard 
                imgUrl="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067"
                cardTitle="Recetario"
                cardContent="Utilizando la React, CSS3 y APIs desarrolle una herramienta que permite a los 
                    usuarios ingresar ingredientes que tienen en casa y obtener posibles recetas que pueden elaborar."
                cardLinkRoute="https://facebook.com"
                cardLinkText="Visitar"
  /> 
            <Flipcard 
                imgUrl="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067"
                cardTitle="Expense tracker"
                cardContent="Utilizando la React, CSS3, Storybook.js y LocalStorage
                    construí una página web que te permite ingresar tus gastos, crear categorías y 
                    observar en que se van tus gastos de manera gráfica."
                cardLinkRoute="https://facebook.com"
                cardLinkText="Visitar"
            /> 
            <Flipcard 
                imgUrl="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067"
                cardTitle="Feliz cumpleaños!"
                cardContent="Utilizando React y CSS3 desarrollé una página web donde con cada toque en un pastel se añade una vela.
                    Para disminuir la cantidad de velas, tienes que soplar las velas. Finalmente, con un botón muestra un mensaje felicitandote
                     por tus x años."
                cardLinkRoute="https://facebook.com"
                cardLinkText="Visitar"
            /> 
            <Flipcard 
                imgUrl="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067"
                cardTitle="Spinners de carga"
                cardContent="Utilizando React y CSS3 desarrollé un sitio web que permite crear indicadores de carga personalizados,
                    permitiendo configurar desde los colores, opacidad, velocidad, ancho, entre muchas otras cosas, y darte el código ya sea en código JSX o en
                    código html + css."
                cardLinkRoute="https://facebook.com"
                cardLinkText="Visitar"
            /> */}
        </div>
        <BarraInferior/>
    </div>
  )
}

export default Proyectos;