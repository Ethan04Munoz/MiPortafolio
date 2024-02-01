import './BarraInferior.css';
function BarraInferior(){
    return (
        <div className="BarraInferior">
            <div>
                <a href="https://github.com/tu-usuario" target="_blank" class="icon-link">
                    <img src="../src/img/github-Dark.svg" alt="GitHub" />
                </a>
            </div>
            <div>
            <a href="path-to-your-cv.pdf" target="_blank" class="icon-link">
                <img src="../src/img/cv-Dark.svg" alt="CV" />
            </a>
            </div>
            <div>
            <a href="https://www.linkedin.com/in/tu-usuario" target="_blank" class="icon-link">
                <img src="../src/img/linkedin-Dark.svg" alt="LinkedIn" />
            </a>
            </div>
        </div>
    )
}

export default BarraInferior;