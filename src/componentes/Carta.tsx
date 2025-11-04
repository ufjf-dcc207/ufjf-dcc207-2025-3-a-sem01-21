// TODO: ainda falta colocar os valores que cada carta representa no 21
// os números é o valor deles mesmo
// rei, rainha, valete tem valor 10
// As pode valer 1 ou 11

interface CartaPadrao {
    naipe: string;
    valor: string; // As, rei, rainha, valete e números
    face_para_cima?: boolean;
    valorblackjack?: number;
}

function getvalorDaCarta(valor: string): number {
    if (valor === 'A') {
        return 11; //pode ser 1 ou 11
    }
    if (['K', 'Q', 'J'].includes(valor)) {
        return 10;
    }
    return parseInt(valor);
}

function Carta({naipe, valor, face_para_cima = true}: CartaPadrao) {
    const valorblackjack = getvalorDaCarta(valor);
    if (!face_para_cima)
        return <div className="carta para-baixo">verso da carta</div>;

    return (
        <div className={"carta carta-" + naipe}>

            <div className="valor-carta valor-superior">{valor}</div>
            <div className="naipe-carta">
                {naipe === 'Paus' && '♣'}
                {naipe === 'Espada' && '♠'}
                {naipe === 'Ouros' && '♦'}
                {naipe === 'Copas' && '♥'}
            </div>
            <div className="valor-carta valor-inferior">{valor}</div>
        </div>
    )
}

export default Carta;