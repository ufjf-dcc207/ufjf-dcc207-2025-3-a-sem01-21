import "./MesaBlackjack.css"
import Mao from "./Mao";

function MesaBlackjack() {

    const cartasDealer = [
        {naipe: 'Copas', valor: 'A'},
        {naipe: 'Espadas', valor: '8'}
    ];
    
    const cartasJogador = [
        {naipe: 'Ouros', valor: '10'},
        {naipe: 'Paus', valor: '7'}
    ]
    return (
        <div className="mesa-blackjack">
            <h2>Mesa de Blackjack(21)</h2>
            <Mao cartas={cartasDealer} titulo="Dealer"></Mao>/
            <Mao cartas={cartasJogador} titulo="Jogador"></Mao>

            <h3>cartas</h3> 
            <button>pedir carta</button>
            <button>parar</button>
            <button>dobrar aposta</button>
        </div>
    )
}

export default MesaBlackjack