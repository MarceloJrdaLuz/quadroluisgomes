import { useState } from "react"
import Botao from "../components/Botao"
import GeradorPdf from "../components/GeradorPdf"
import HeadComponent from "../components/HeadComponent"
import LayoutPrincipal from "../components/LayoutPrincipal"

export default function Campo() {

    const [pdfShow, setPdfShow] = useState(false)
    const [options, setOptions] = useState('')

    function renderizarPdf(opcao: string) {
        return (
            <GeradorPdf nomeArquivo={opcao} setPdfShow={setPdfShow} />
        )
    }
    return !pdfShow ? (
        <>
            <HeadComponent title="Designações de Campo" urlMiniatura="https://luisgomes.netlify.app/images/campolight.png" />
            <LayoutPrincipal heightConteudo={'1/2'} header className="bg-campo bg-center bg-cover lg:bg-right" textoHeader="Designações de Campo" >

                <div className="linha bg-gray-500 mt-2 w-full h-0.5 md:w-4/5"></div>
                <Botao onClick={() => { setOptions('Campo'), setPdfShow(true) }} texto='Designações de Campo' />
                <Botao onClick={() => { setOptions('Carrinho'), setPdfShow(true) }} texto='Designações Testemunho Público' />
                <Botao href='/' texto='Voltar' />
            </LayoutPrincipal>
        </>
    ) : renderizarPdf(options)
}