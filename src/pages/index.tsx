import Botao from "../components/Botao";
import Footer from "../components/Footer";
import LayoutPrincipal from "../components/LayoutPrincipal";

export default function Home() {
  return (
    <div className=" flex flex-col">
      <LayoutPrincipal>
        <Botao href="/relatorio" texto="Relatório de Serviço de Campo" />
        <Botao href="/limpeza" texto="Limpeza do Salão do Reino" />
        <Botao href="/designacoes" texto="Designações das Reuniões" />
        <Botao href="/financeiro" texto="Relatório Financeiro" />
        <Botao href="/cartas" texto="Cartas" />
      </LayoutPrincipal>
    </div>
  )
}
