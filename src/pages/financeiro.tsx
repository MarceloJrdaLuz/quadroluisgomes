import { useState } from "react";
import Botao from "../components/Botao";
import GeradorPdf from "../components/GeradorPdf";
import LayoutPrincipal from "../components/LayoutPrincipal";
import HeadComponent from "../components/HeadComponent";


export default function Financeiro() {

    const [pdfShow, setPdfShow] = useState(false)

    function renderizarPdf(opcao: string) {
        return (
            <GeradorPdf caminho={opcao} mes='financeiro' setPdfShow={setPdfShow}/>
        )
    }
    return !pdfShow ? (
        <>
        <HeadComponent title="Financeiro"/>
        <LayoutPrincipal  heightConteudo={'1/2'} header className="bg-contas bg-left-bottom bg-cover lg:bg-right" textoHeader="Relatório Financeiro">
            <div className="linha bg-gray-500 mt-2 w-full h-0.5 md:w-4/5"></div>

            <Botao onClick={()=>setPdfShow(true)} texto='Relatório das Contas' />
            <Botao href='/' texto='Voltar' />
        </LayoutPrincipal>
        </>
    ) : (
        renderizarPdf('financeiro')
    )
}