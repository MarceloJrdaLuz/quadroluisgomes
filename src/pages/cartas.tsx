import { useState } from "react";
import Botao from "../components/Botao";
import GeradorPdf from "../components/GeradorPdf";
import LayoutPrincipal from "../components/LayoutPrincipal";
import { meses } from "../functions/meses";

export default function Cartas() {

    const [pdfShow, setPdfShow] = useState(false)

    const [visivel, setVisivel] = useState(false) //

    const [visivelCartas, setVisivelCartas] = useState(false) //


    function renderizarPdf(opcao: string) {
        return (
            <GeradorPdf caminho={opcao} mes='cartas'/>
        )
    }

    function renderizarBotoesEventos (){
        return(
            <div className="flex justify-between w-full md:w-4/5">
                <Botao texto='Assembleias'/>
                <Botao texto='Congresso'/>
                <Botao texto='Visita do SC'/>
            </div>
        )
    }
    function renderizarBotoesCartas (){
        return(
            <div className="flex justify-between w-full md:w-4/5">
                <Botao texto='Carta 1'/>
                <Botao texto='Carta 2'/>
            </div>
        )
    }
    return !pdfShow ? (
        <LayoutPrincipal className="bg-cartas bg-left-bottom bg-cover lg:bg-right">
            <div className="linha bg-gray-500 mt-2 w-full h-0.5 md:w-4/5"></div>

            <Botao texto={`Cartas do mês de ${meses[new Date().getMonth()]}`} onClick={()=>{setVisivelCartas(true), setVisivel(false)}} />

            {visivelCartas ? renderizarBotoesCartas() : null}

            <Botao texto={`Eventos Especiais`} onClick={()=> {setVisivel(true),renderizarBotoesEventos(), setVisivelCartas(false)}} />

            {visivel ? renderizarBotoesEventos() : null }

            <Botao href='/' texto='Voltar' />
        </LayoutPrincipal>
    ) : (
        renderizarPdf('cartas')
    )
}