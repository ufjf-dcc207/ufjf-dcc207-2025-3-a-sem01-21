import './App.css'
import MesaBlackjack from './componentes/MesaBlackjack'
import Saldo from './componentes/Saldo'
import AddSaldo from './componentes/AddSaldo'

function App() {
  return (
    <div className='App'>
      <h1>♠️ Bem-vindo ao jogo de 21 ♣️</h1>
      <MesaBlackjack />
      <Saldo valor={0}/>
      <AddSaldo />
    </div>
  )
}

export default App
