import Mao from "./Mao";

interface JogadorProps {
  nome: string;
  cartas: Array<{ naipe: string; valor: string }>;
}

export default function Jogador({ nome, cartas }: JogadorProps) {
  return (
    <div className="jogador">
      <h3>{nome}</h3>
      <Mao cartas={cartas} titulo="Mão do Jogador" />
    </div>
  );
}
