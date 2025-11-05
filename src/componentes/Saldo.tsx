import "./Saldo.css"

interface saldo {
    valor: number;
}
function displaySaldo({ valor }: saldo) {
    return (
        <div className="saldo-container">
            <h3>Saldo: {valor}</h3>
            <button className="botao-saldo">Adicionar Saldo</button>
        </div>
    )
}
export default displaySaldo;