import Carta from "./Carta";
import "./Mao.css"

interface MaoPadrao {
    cartas: Array<{naipe: string; valor: string}>;
    titulo: string;
}

export default function Mao({cartas, titulo}: MaoPadrao) {
    return (
        <div className="mao">
            <h3>{titulo}</h3>
            <div className="cartas">
                {cartas.map((carta, posicao) => (
                    <Carta
                        key = {posicao}
                        naipe={carta.naipe}
                        valor={carta.valor}
                    />
                ))}
            </div>
        </div>
    );
}