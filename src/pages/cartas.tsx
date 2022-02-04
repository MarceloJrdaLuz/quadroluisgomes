import { useState } from "react";
import Botao from "../components/Botao";
import GeradorPdf from "../components/GeradorPdf";
import LayoutPrincipal from "../components/LayoutPrincipal";
import { meses } from "../functions/meses";
import HeadComponent from "../components/HeadComponent";

export default function Cartas() {

    const [pdfShow, setPdfShow] = useState(false)

    const [visivel, setVisivel] = useState(false) //

    const [visivelCartas, setVisivelCartas] = useState(false) //

    const [item, setItem] = useState<'' | 'carta1' | 'carta2' | 'assembleias' | 'congresso' | 'visita'>('')

    const [rotate, setRotate] = useState(0)


    function renderizarPdf(item?: string) {
        console.log(item)
        return (
            <GeradorPdf caminho='cartas' mes={item} rotate={rotate} setPdfShow={setPdfShow} />
        )
    }

    function renderizarBotoesEventos() {
        return (
            <div className="flex justify-between w-full md:w-4/5">
                <Botao onClick={() => { setItem('assembleias'), setPdfShow(true), setRotate(90) }} texto='Assembleias' />

                <Botao onClick={() => { setItem('congresso'), setPdfShow(true) }} texto='Congresso' />

                <Botao onClick={() => { setItem('visita'), setPdfShow(true), setRotate(90) }} texto='Visita do SC' />
            </div>
        )
    }
    function renderizarBotoesCartas() {
        return (
            <div className="flex justify-between w-full md:w-4/5">
                <Botao onClick={() => { setItem('carta1'), setPdfShow(true), setRotate(0) }} texto='Carta 1' />
                <Botao onClick={() => { setItem('carta2'), setPdfShow(true), setRotate(0) }} texto='Carta 2' />
            </div>
        )
    }
    return !pdfShow ? (
        <>
            <HeadComponent title="Cartas" />
            <LayoutPrincipal textoHeader="Cartas" heightConteudo={'1/2'} header className="bg-cartas bg-left-bottom bg-cover lg:bg-right">
                <div className="linha bg-gray-500 mt-2 w-full h-0.5 md:w-4/5"></div>

                <Botao texto={`Cartas do mês de ${meses[new Date().getMonth()]}`} onClick={() => { setVisivelCartas(true), setVisivel(false) }} />

                {visivelCartas ? renderizarBotoesCartas() : null}

                <Botao texto={`Eventos Especiais`} onClick={() => { setVisivel(true), renderizarBotoesEventos(), setVisivelCartas(false) }} />

                {visivel ? renderizarBotoesEventos() : null}

                <Botao href='/' texto='Voltar' />
            </LayoutPrincipal>
        </>
    ) : (
        renderizarPdf(item)
    )
}