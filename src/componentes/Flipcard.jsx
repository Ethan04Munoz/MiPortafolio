import './Flipcard.css';
import { useSelector } from 'react-redux';
import translations from '../translations.js'; 

function Flipcard (props){
    const style = {
        backgroundImage: `url(${props.imgUrl})`, //Se establece como imagen de fondo la imagen que se proporcione por props
    };
    const language = useSelector(state => state.language.language); // Accede al idioma actual desde el store de Redux
    const id = props.id;

    // Accede a las traducciones según el idioma y el identificador de la tarjeta
    const cardTitle = translations[language][id].title;
    const cardContent = translations[language][id].content;
    
    return (
        <div className="flipcard">
            <div className="cardFront" style={style}></div>
            <div className="cardBack">
                <h1>{cardTitle}</h1>
                <p>{cardContent}</p>
                <a target='_blank' href={props.cardLinkRoute}>{props.cardLinkText}</a>
            </div>
        </div>
    )
}

export default Flipcard;