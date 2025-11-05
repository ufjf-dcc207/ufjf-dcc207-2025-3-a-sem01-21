import "./MesaBlackjack.css"
import Mao from "./Mao";
import Jogador from "./Jogador";
import Controles from "./Controles";

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
            <h2>Sua Vez!</h2>
            <Mao cartas={cartasDealer} titulo="Dealer"></Mao>/
            <Jogador nome="Jogador" cartas={cartasJogador} />

            <Controles titulo="Controles"/>

        </div>
    )
}

export default MesaBlackjack