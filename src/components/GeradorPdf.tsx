import Image from "next/image";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import { IconeSetaDireita, IconeSetaEsquerda, IconeVoltar } from "./Icons/Icons";
import loading from './Icons/loadin.gif'



interface GeradorPdfProps {
    mes?: string
    caminho: 'meiodesemana' | 'fimdesemana' | 'cartas' | 'financeiro' | any
    rotate?: number
}
export default function GeradorPdf(props: GeradorPdfProps) {

    const[renderBtn, setRenderBtn] = useState(true)
    const [numPages, setNumPages] = useState(null)
    const [numberPage, setNumberPage] = useState(1)
    const ultimaPagina = numPages
    const primeiraPagina = numPages - numPages + 1

    function onDocumentLoadSuccess({ numPages }) {
        setRenderBtn(true)
        renderizarBotoes()
        setNumPages(numPages)
    }

    function renderError (){
        setRenderBtn(false)
        return(
                <div className="text-2xl text-gray-900 bg-teal- bg-teal-500 px-24 py-10 shadow shadow-slate-900 md:px-32 md:py-12 rounded-lg">Arquivo não disponível</div>
        )    
    }

    function renderizarBotoes(){
        return renderBtn ? (
            <div className="flex w-full max-w-fit md:justify-center">
                    <div onClick={() => window.location.reload()} className="ml-2 pb-1">
                        Voltar
                        {IconeVoltar}
                    </div>

                <div className="flex mr-4 w-96 justify-center">
                    <div
                        onClick={() => numberPage > 1 ? setNumberPage(numberPage - 1) : setNumberPage(ultimaPagina)}
                        className="flex flex-col justify-center items-center pb-1">
                        Anterior
                        {IconeSetaEsquerda}
                    </div>
                    <div
                        onClick={() => numberPage < numPages ? setNumberPage(numberPage + 1) : setNumberPage(primeiraPagina)}
                        className="flex flex-col ml-4 justify-center items-center pb-1">
                        Seguinte
                        {IconeSetaDireita}
                    </div>
                </div>
            </div>
        ): null
    }
    return (
        <section className="flex flex-col h-screen w-screen items-center justify-center  overflow-auto bg-gray-200">

            <Document
                file={`/assets/${props.caminho}/${props.mes}.pdf`}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<Image src={loading} alt="Gif de carregamento"></Image>}
                error={renderError}
                rotate={props.rotate ? props.rotate : 0}
            >
                <Page
                    height={600}
                    pageNumber={numberPage}
                />
            </Document>
            {renderizarBotoes()}
        </section>
    )
}