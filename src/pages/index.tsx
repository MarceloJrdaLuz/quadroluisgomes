import Botao from "../components/Botao";
import HeadComponent from "../components/HeadComponent";
import LayoutPrincipal from "../components/LayoutPrincipal";

export default function Home() {

  return (
    <div className=" flex flex-col bg-gray-200">
      <HeadComponent title="Quadro de Anúncios" urlMiniatura="https://luisgomes.netlify.app/images/miniatura.png"/>
      <LayoutPrincipal textoHeader="Quadro de Anúncios" heightConteudo={'1/2'} header className="bg-home bg-left-bottom bg-cover md:bg-center lg:bg-right ">
        <Botao href="/relatorio" texto="Relatório de Serviço de Campo" />
        <Botao href="/limpeza" texto="Limpeza do Salão do Reino" />
        <Botao href="/designacoes" texto="Designações das Reuniões" />
        <Botao href="/campo" texto="Designações de Campo" />
        <Botao href="/financeiro" texto="Relatório Financeiro" />
        <Botao href="/cartas" texto="Cartas" />
      </LayoutPrincipal>
    </div>
  )
}
