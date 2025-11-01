import Carta from "./Carta";

interface MaoPadrao {
    cartas: Array<{naipe: string; valor: string}>;
}

export default function Mao({cartas}: MaoPadrao) {
    return (
        <div className="mao">
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