import { useState } from "react"
import Botao from "../components/Botao"
import GeradorPdf from "../components/GeradorPdf"
import HeadComponent from "../components/HeadComponent"
import LayoutPrincipal from "../components/LayoutPrincipal"

export default function Campo (){

    const [pdfShow, setPdfShow] = useState(false)

    function renderizarPdf(opcao: string) {
        return (
            <GeradorPdf caminho={opcao} mes='campo'/>
        )
    }
    return !pdfShow ? (
        <>
        <HeadComponent title="Designações de Campo"/>
        <LayoutPrincipal heightConteudo={'1/2'} header className="bg-home bg-left-bottom bg-cover lg:bg-right" textoHeader="Designações de Campo" >
               
            <div className="linha bg-gray-500 mt-2 w-full h-0.5 md:w-4/5"></div>
            <Botao onClick={() => {setPdfShow(true)}}texto='Designações de Campo'/>
            <Botao href='/' texto='Voltar'/>
        </LayoutPrincipal>
        </> 
    ) : renderizarPdf('campo')
}