interface ControlesProps {
    titulo: string;
}

const Controles = ({ titulo }: ControlesProps) => {
    return (
        <div className="controles">
            <h3>{titulo}</h3>
            <button>Pedir Carta</button>
            <button>Parar</button>
            <button>Dobrar Aposta</button>
        </div>
    );
}

export default Controles;