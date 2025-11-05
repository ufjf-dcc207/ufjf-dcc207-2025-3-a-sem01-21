import "./Controles.css"
interface ControlesProps {
    titulo: string;
}

const Controles = ({ titulo }: ControlesProps) => {
    return (
        <div className="controles">
            <h3>{titulo}</h3>
            <div className="cartas">
                <button className="botaocontrole">Pedir Carta</button>
                <button className="botaocontrole">Parar</button>
                <button className="botaocontrole">Dobrar Aposta</button>
            </div>
        </div>
    );
}

export default Controles;