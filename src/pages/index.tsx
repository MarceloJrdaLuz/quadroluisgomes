import Botao from "../components/Botao";
import LayoutPrincipal from "../components/LayoutPrincipal";

export default function Home() {

  return (
    <div className=" flex flex-col bg-gray-200">
      <LayoutPrincipal heightConteudo={'1/2'} header className="bg-home  bg-left-bottom bg-cover lg:bg-right ">
        <Botao href="/relatorio" texto="Relatório de Serviço de Campo" />
        <Botao href="/designacoes" texto="Designações das Reuniões" />
        <Botao href="/limpeza" texto="Limpeza do Salão do Reino" />
        <Botao href="/financeiro" texto="Relatório Financeiro" />
        <Botao href="/cartas" texto="Cartas" />
      </LayoutPrincipal>
    </div>
  )
}
