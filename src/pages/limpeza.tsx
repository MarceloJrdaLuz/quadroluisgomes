import { useState } from "react";
import Botao from "../components/Botao";
import GeradorPdf from "../components/GeradorPdf";
import HeadComponent from "../components/HeadComponent";
import LayoutPrincipal from "../components/LayoutPrincipal";

export default function Limpeza (){

    const [pdfShow, setPdfShow] = useState(false)

    function renderizarPdf(opcao: string) {
        return (
            <GeradorPdf caminho={opcao} mes='limpeza' setPdfShow={setPdfShow}/>
        )
    }
    return !pdfShow ? (
        <>
        <HeadComponent title="Limpeza"/>
        <LayoutPrincipal heightConteudo={'1/2'} header className="bg-limpeza bg-left-bottom bg-cover lg:bg-right" textoHeader="Limpeza do Salão" >
               
            <div className="linha bg-gray-500 mt-2 w-full h-0.5 md:w-4/5"></div>
            <Botao onClick={() => {setPdfShow(true)}}texto='Designações de Limpeza'/>
            <Botao href='/' texto='Voltar'/>
        </LayoutPrincipal>
        </> 
    ) : renderizarPdf('limpeza')
}