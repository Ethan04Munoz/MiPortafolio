import './Flipcard.css';

function Flipcard (props){
    const style = {
        backgroundImage: `url(${props.imgUrl})`, //Se establece como imagen de fondo la imagen que se proporcione por props
    };
    return (
        <div className="flipcard">
            <div className="cardFront" style={style}></div>
            <div className="cardBack">
                <h1>{props.cardTitle}</h1>
                <p>{props.cardContent}</p>
                <a target='_blank' href={props.cardLinkRoute}>{props.cardLinkText}</a>
            </div>
        </div>
    )
}

export default Flipcard;